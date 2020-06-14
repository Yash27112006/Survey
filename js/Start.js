class Start {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Fill');
  }
  hide(){
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Survey for Google");
    title.position(displayWidth/2-35, 10);

    this.input.position(displayWidth/2-25, displayHeight/2-15);
    this.button.position(displayWidth/2+30, displayHeight/2+20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

    });

  }
  
}
