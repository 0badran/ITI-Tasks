import { Component } from "react";
import "./AboutMe.css";

export default class AboutMe extends Component {
  constructor() {
    super();
  }
  render() {
    return <>
      <div id="about" className="text-muted">
        <div className="w-25 h-0 display-5  fw-bold">About Me</div>
        <div className="w-75">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ea quos consequuntur rerum velit et perspiciatis facilis eum accusantium illum, officia at eos provident consectetur esse blanditiis sint voluptatem nobis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas, odio iste dolore voluptatum eveniet necessitatibus inventore suscipit repudiandae accusamus! Eligendi labore aliquid qui officiis commodi recusandae officia deleniti impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum eligendi id aspernatur eveniet! Tenetur minima molestiae ipsum dolor dolorum quos dolorem sed fugit ea magni repellat, aliquam consequatur inventore!</p>
          <a className="btn btn-secondary mt-5 px-4 rounded-0">Download resource</a>
        </div>
      </div>
    </>
  }
} 