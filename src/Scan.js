import React from "react";
// Import COCO-SSD model as cocoSSD
import * as cocoSSD from "@tensorflow-models/coco-ssd";

export default class extends React.Component {
  componentDidMount() {
    this.webcam_init();
    this.predictWithCocoModel();
  }

  webcam_init = () => {
    this.video = document.getElementById("vid");

    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user"
        }
      })
      .then(stream => {
        this.video.srcObject = stream;
        this.video.onloadedmetadata = () => {
          this.video.play();
        };
      });
  };
  predictWithCocoModel = async () => {
    const model = await cocoSSD.load("lite_mobilenet_v2");
    this.detectFrame(this.video, model);
    console.log("model loaded");
  };

  detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  renderPredictions = predictions => {
    const canvas = document.getElementById("canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = 375;
    canvas.height = 667;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.drawImage(this.video, 0, 0, 375, 667);

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
  };

  render() {
    return (
      <div>
        <div style="text-align:center">
          <video hidden id="vid" height="667" width="375" />
          <canvas id="canvas" />
        </div>
      </div>
    );
  }
}
