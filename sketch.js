'use script'
let waveFormSelect;
let osc;
let pNoise;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator('square');
createP('Select a type of siren n draw some circles')
  waveFormSelect = createSelect();

  waveFormSelect.option('sine');
  waveFormSelect.option('sawtooth');
  waveFormSelect.option('square');
   waveFormSelect.option('triangle');
   waveFormSelect.changed(setWaveForm);
}

function draw() {
line(mouseX,mouseY,pmouseX,pmouseY)
      
pNoise = noise(frameCount / 20) * 100;
  osc.freq(map(mouseX, 0, width, 60, 1200) + pNoise);

  // osc.amp(map(mouseY, 0, height, .2, 0));
osc.amp(map(sin(frameCount/10),-1, 1, 0.2, .05));
}
function setWaveForm(){
osc.setType(waveFormSelect.value());
}
  function mousePressed(){
    osc.start();

}
  
  function mouseReleased(){
        osc.stop();
  }