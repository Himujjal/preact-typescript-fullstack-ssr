import { h } from "preact";

import render from "preact-render-to-string";
import App from "../src/components/app";

const data = new Date().getTime();

const preactTemplate = () => {
  console.log(data);
  return render(<App data={data} />);
};

const htmlTemplate = () => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./main.css">
</head>

<body>
    <div id="app">
        ${preactTemplate()}
    </div>
</body>

<script src="main.js"></script>

</html>
`;

export default htmlTemplate;
