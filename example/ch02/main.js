$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    
    let tool = new Tool();

    let c = new Path.Circle(new Point(80, 50), 80);
    c.fillcolor = 'black';
    let text = new PointText(200, 200);
    text.justification = 'center';
    text.fillcolor = 'white';
    text.fontSize = 20;
    text.content = 'Hello, World!'

    tool.onMouseDown = function(event) {
        let c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillcolor = 'green';
    }
    // let c;
    // for (let x = 25; x<400; x+=50) {
    //     for (let y =25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillcolor = 'green';
    //     }
    // }
    paper.view.draw();
});

