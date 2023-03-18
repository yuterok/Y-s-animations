(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"практика 2_atlas_", frames: [[0,0,500,500],[1506,0,520,400],[1506,402,520,400],[0,502,520,400],[502,0,500,500],[924,502,400,400],[1326,804,400,400],[402,904,400,400],[0,904,400,400],[804,904,400,400],[522,502,400,400],[1004,0,500,500],[1608,1206,400,400],[0,1306,400,400],[1206,1206,400,400]]}
];


// symbols:



(lib._1house = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1pig = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1pigpngкопия = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1_1pigpngкопия2 = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2house = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._2pig = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._2pigpngкопия = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2_2pig = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3pig = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._3pigpngкопия = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._3_3pig = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bacl = function() {
	this.initialize(img.bacl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2980,583);


(lib.house3 = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wolfpngкопия = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wolf2pngкопия = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.wolf3 = function() {
	this.initialize(ss["практика 2_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ_3_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3pigpngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9125,0.9125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_3_Слой_1, null, null);


(lib.Символ_2_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2pigpngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9125,0.9125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_2_Слой_1, null, null);


(lib.Монтажный_кадр_1_whoooooosh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whoooooosh
	this.instance = new lib.wolf2pngкопия();
	this.instance.parent = this;
	this.instance.setTransform(275,284,0.9875,0.9875);
	this.instance._off = true;

	this.instance_1 = new lib.wolf2pngкопия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,284,0.0025,0.0025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},92).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},46).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},57).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1},{t:this.instance}]},10).to({state:[{t:this.instance}]},8).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(15).to({scaleX:0.0025,scaleY:0.0025},0).wait(46).to({scaleX:0.9875,scaleY:0.9875},0).wait(14).to({scaleX:0.0025,scaleY:0.0025},0).wait(57).to({scaleX:0.9875,scaleY:0.9875},0).wait(10).to({scaleX:0.0025,scaleY:0.0025},0).wait(12).to({scaleX:0.9875,scaleY:0.9875},0).wait(10).to({scaleX:0.0025,scaleY:0.0025,x:639,y:359},0).wait(8).to({scaleX:0.9875,scaleY:0.9875,x:275,y:284},0).wait(10));

}).prototype = p = new cjs.MovieClip();


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1pigpngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-260,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260,-200,520,400);


(lib.Анимация23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wolf3();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Анимация22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wolf3();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Анимация21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.house3();
	this.instance.parent = this;
	this.instance.setTransform(-291,-291,1.1639,1.1639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291,-291,582,582);


(lib.Анимация20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2house();
	this.instance.parent = this;
	this.instance.setTransform(-300,-300,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-300,600,600);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1house();
	this.instance.parent = this;
	this.instance.setTransform(-286.45,-286.45,1.1459,1.1459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.4,-286.4,572.9,572.9);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bacl();
	this.instance.parent = this;
	this.instance.setTransform(-2335.9,-457,1.5677,1.5677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2335.9,-457,4671.9,914);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1_1pigpngкопия2();
	this.instance.parent = this;
	this.instance.setTransform(-245,-188.45,0.9423,0.9422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-188.4,490,376.9);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2_2pig();
	this.instance.parent = this;
	this.instance.setTransform(-178,-178,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-178,356,356);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3_3pig();
	this.instance.parent = this;
	this.instance.setTransform(-178,-178,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-178,356,356);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wolfpngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3pig();
	this.instance.parent = this;
	this.instance.setTransform(-178.55,-177.9,0.8929,0.8895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.5,-177.9,357.1,355.8);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2pig();
	this.instance.parent = this;
	this.instance.setTransform(-178.55,-177.9,0.8929,0.8895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.5,-177.9,357.1,355.8);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1pig();
	this.instance.parent = this;
	this.instance.setTransform(-241.9,-188.5,0.9303,0.9424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.9,-188.5,483.8,377);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1pig();
	this.instance.parent = this;
	this.instance.setTransform(-241.9,-188.5,0.9303,0.9424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.9,-188.5,483.8,377);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_3_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(182.5,182.5,1,1,0,0,0,182.5,182.5);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,365,365), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_2_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(182.5,182.5,1,1,0,0,0,182.5,182.5);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,365,365), null);


(lib.Монтажный_кадр_1_wolf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wolf
	this.instance = new lib.Анимация12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-126,477,1,1,28.9997);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.999,scaleY:0.999,rotation:5.0002,x:-29.15,y:477.05},2).to({rotation:-2.9989,x:19.15},1).to({regX:0.2,regY:0.2,scaleX:0.9996,scaleY:0.9996,rotation:-0.0009,x:115.9},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:164.35,y:477},1).to({startPosition:0},49).to({rotation:-3.0001,x:207.7,y:476.95},3).to({regX:0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:3.9983,x:265.6,y:477},4).to({regY:0.2,scaleX:0.9997,scaleY:0.9997,rotation:-3.9999,x:308.95,y:477.1},3).to({regY:0.4,rotation:2.9994,x:352.25,y:477.15},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:424.45,y:477},5).wait(5).to({regX:19.4,regY:154.6,x:443.85,y:631.6},0).wait(1).to({regX:20,regY:179.8,scaleX:0.0025,scaleY:0.0025,x:424.5,y:477.9},0).wait(15).to({regX:0,regY:0,scaleX:1,scaleY:1,x:424.45,y:477},0).to({startPosition:0},2).to({startPosition:0},20).to({rotation:-5.0001,y:476.95},3).to({regX:-0.1,regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:3.9987,x:424.4},4).to({regY:0.2,scaleX:0.9997,scaleY:0.9997,rotation:-3.9989,x:424.45,y:477.05},5).to({regY:0.3,scaleX:0.9998,scaleY:0.9998,rotation:2.9983,x:424.4,y:477.1},4).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:424.45,y:477},3).to({startPosition:0},3).wait(2).to({regY:20,scaleX:0.0025,scaleY:0.0025,y:477.5},0).wait(14).to({scaleX:0.9885,scaleY:0.9885,y:497.2},0).wait(22).to({startPosition:0},0).to({regX:0.1,regY:20.1,scaleX:0.9884,scaleY:0.9884,rotation:-3.9995,x:424.55,y:497.25},3).to({regX:0.2,regY:20.2,scaleX:0.9882,scaleY:0.9882,rotation:4.9987,y:497.35},4).to({scaleX:0.988,scaleY:0.988,rotation:-3.0001,y:497.4},4).to({regY:20.3,rotation:3.9987,x:424.6,y:497.35},4).to({regY:20.4,scaleX:0.9879,scaleY:0.9879,rotation:-3.9988,x:424.55,y:497.4},4).to({regX:0.4,scaleX:0.988,scaleY:0.988,rotation:3.9984,x:424.65,y:497.35},4).to({scaleX:0.9882,scaleY:0.9882,rotation:-2.9989,x:424.55,y:497.3},3).to({regX:0.5,regY:20.5,scaleX:0.9881,scaleY:0.9881,rotation:0,x:424.6,y:497.35},2).wait(7).to({regX:20,regY:20,scaleX:0.0025,scaleY:0.0025,x:424.5,y:478},0).wait(10).to({scaleX:0.9885,scaleY:0.9885,x:444.2,y:497.7},0).wait(11).to({regX:0,x:424.45,y:497.2},0).wait(1).to({regX:20,scaleX:0.0025,scaleY:0.0025,x:424.5,y:478},0).wait(10).to({scaleX:0.9885,scaleY:0.9885,x:444.2,y:497.7},0).wait(8));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_thd_pig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thd_pig
	this.instance = new lib.Анимация10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1099.55,507.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1101.4,y:389.1},5).to({y:513.5},5).to({y:413},6).to({y:497.85},8).to({_off:true},7).wait(319));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_sec_pig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sec_pig
	this.instance = new lib.Анимация9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(782.55,497.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:328.8},4).to({y:507.9},5).to({y:375.5},5).to({y:497.85},6).to({_off:true},6).wait(340));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_sad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sad
	this.instance = new lib.wolf3();
	this.instance.parent = this;
	this.instance.setTransform(224,277);

	this.instance_1 = new lib.Анимация22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424,477);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация23("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-120.45,477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},274).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).to({rotation:-5.0001,x:323.2,y:476.95},5).to({scaleX:0.9998,scaleY:0.9998,rotation:4.9996,x:222.3},5).to({regX:0.1,regY:0.1,scaleX:0.9997,scaleY:0.9997,rotation:-3.9999,x:101.35,y:477.05},6).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-120.45,y:477},11).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_pig3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pig3
	this.instance = new lib._3_3pig();
	this.instance.parent = this;
	this.instance.setTransform(923,322,0.89,0.89);

	this.instance_1 = new lib.Анимация13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1101,500);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},26).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},39).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({rotation:-3.9995,x:1152.8,y:499.6},2).to({regX:0.1,regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:3.9995,x:1204.7,y:499.35},2).to({scaleX:0.9996,scaleY:0.9996,rotation:-2.9995,x:1256.5,y:499},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:1411.95,y:498},6).to({startPosition:0},39).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_pig2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pig2
	this.instance = new lib._2_2pig();
	this.instance.parent = this;
	this.instance.setTransform(605,320,0.89,0.89);

	this.instance_1 = new lib.Анимация14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(783,498);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},26).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({rotation:-5.0001,x:849.75,y:497.85},2).to({scaleX:0.9997,scaleY:0.9997,rotation:4.9989,x:916.55,y:497.75},2).to({regX:0.1,regY:0.1,scaleX:0.9995,scaleY:0.9995,rotation:-4.9983,x:983.4},2).to({regY:0.2,scaleX:0.9993,scaleY:0.9993,rotation:3.9997,x:1050.15,y:497.7},2).to({scaleX:0.9991,scaleY:0.9991,rotation:-4.9986,x:1117.05,y:497.65},2).to({scaleX:0.9993,scaleY:0.9993,rotation:2.8148,x:1150.35,y:497.6},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:1450.75,y:497},9).to({startPosition:0},31).wait(60).to({x:1069,y:499},0).wait(5).to({startPosition:0},0).to({y:428.45},5).to({x:1137.7,y:502.25},5).to({startPosition:0},8).to({x:1660.7},12).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_pig1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pig1
	this.instance = new lib._1_1pigpngкопия2();
	this.instance.parent = this;
	this.instance.setTransform(246,319,0.9423,0.9422);

	this.instance_1 = new lib.Анимация15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(491,507.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},26).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},26).to({state:[]},14).to({state:[{t:this.instance_1}]},22).to({state:[]},15).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({rotation:5.0001,x:563.4},2).to({scaleX:0.9997,scaleY:0.9997,rotation:-3.999,x:635.8,y:507.5},2).to({regX:0.1,regY:0.1,scaleX:0.9996,scaleY:0.9996,rotation:3.9987,x:744.4,y:507.55},3).to({regX:0.2,scaleX:0.9994,scaleY:0.9994,rotation:-2.9995,x:816.85,y:507.6},2).to({scaleX:0.9993,scaleY:0.9993,rotation:2.9989,x:889.2},2).to({regX:0.4,scaleX:0.9992,scaleY:0.9992,rotation:-3.9984,x:961.7,y:507.5},2).to({regY:0.2,scaleX:0.9991,scaleY:0.9991,rotation:3.9996,x:1034.1,y:507.65},2).to({regX:0.5,rotation:-2.9994,x:1106.45,y:507.6},2).to({regY:0.3,scaleX:0.9992,scaleY:0.9992,rotation:3.9985,x:1178.85,y:507.65},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:1395.9,y:507.45},6).wait(26).to({x:1002.2,y:494.05},0).to({_off:true},14).wait(22).to({_off:false,x:1397.45,y:490.55},0).to({_off:true},15).wait(14).to({_off:false,x:954.6,y:488.55},0).to({y:418},5).to({x:867.15,y:505.8},5).to({startPosition:0},8).to({x:1390.15},12).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_house3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// house3
	this.instance = new lib.Анимация21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1540.05,392);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196).to({_off:false},0).to({x:1022},21).to({startPosition:0},148).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_house2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// house2
	this.instance = new lib.Анимация20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1498.3,393.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({x:1024,y:391},19).to({startPosition:0},3).to({startPosition:0},4).to({scaleX:0.0017,scaleY:0.0017,x:1020.25,y:688},11).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_house1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// house1
	this.instance = new lib.Анимация17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1499.75,390.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({x:993.45,y:392.45},18).to({startPosition:0},10).to({regX:57.5,regY:546.1,scaleX:0.0017,scaleY:0.0017,x:984.6,y:682.95},11).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_first_pig___копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// first_pig___копия
	this.instance = new lib.Анимация24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(991.65,480.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(313).to({_off:false},0).to({guide:{path:[991.7,480.2,959.5,504.1,913.4,487,887.2,435.7,851.4,392.9]}},4).to({guide:{path:[851.4,392.9,841.7,381.3,831.3,370.3,799.4,336.8,765.2,310.4,734.4,289.9,703.7,269.4,652.6,243.4,597.1,231.5,569.6,225.5,541.2,223,500.4,219.3,459.5,224.4,415.3,229.9,373.3,241.8,355.5,246.8,334.8,252.1,306.3,257.5,277.9,262.9,253.4,276.3,228.9,289.7,206,313.3,183.2,336.9,159.2,419.5,135.3,502.1]}},19).to({startPosition:0},5).to({y:381.75},5).to({y:499.1},6).to({startPosition:0},2).to({y:368.4},3).to({y:495.3},4).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_first_pig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// first_pig
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(491.9,498.5);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(491.9,378.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:378.5},4).wait(354));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({y:497.3},5).to({y:417.5},6).to({y:508.45},5).to({_off:true},6).wait(332));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_фон = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// фон
	this.instance = new lib.Анимация16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2319.9,354);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},68).to({x:2028.05},18).to({startPosition:0},8).to({startPosition:0},34).to({x:1320.4},21).to({startPosition:0},40).to({x:1245.25},3).to({x:619.25},25).to({startPosition:0},148).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Слой_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_12
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(1025.5,483.5,1,1,0,0,0,182.5,182.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(327).to({_off:false},0).wait(1).to({x:988.45,y:455.75},0).wait(1).to({x:947.6,y:428.05},0).wait(1).to({x:903.1,y:400.3},0).wait(1).to({x:855.15,y:372.6},0).wait(1).to({x:803.3,y:344.85},0).wait(1).to({x:744.75,y:317.15},0).wait(1).to({x:685.25,y:364.3},0).wait(1).to({x:658.4,y:411.5},0).wait(1).to({y:458.7},0).wait(1).to({y:505.9},0).wait(5).to({y:479.15},0).wait(1).to({y:452.4},0).wait(1).to({y:425.65},0).wait(1).to({y:398.9},0).wait(1).to({y:372.2},0).wait(1).to({y:397.65},0).wait(1).to({y:423.1},0).wait(1).to({y:448.55},0).wait(1).to({y:474},0).wait(1).to({y:499.5},0).wait(1).to({y:473.95},0).wait(1).to({y:448.4},0).wait(1).to({y:422.85},0).wait(1).to({y:397.3},0).wait(1).to({y:371.75},0).wait(1).to({y:399.95},0).wait(1).to({y:428.15},0).wait(1).to({y:456.4},0).wait(1).to({y:484.6},0).wait(1).to({y:512.85},0).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Слой_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_11
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(1022.25,483.2,1,1,0,0,0,182.5,182.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(322).to({_off:false},0).to({x:655.35,y:264.85},5).to({x:364.2,y:508.45},10).wait(4).to({y:324.25},5).to({y:499.5},5).to({y:339.05},5).to({y:502.5},5).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Слой_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_8
	this.instance = new lib.Анимация15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1002.2,494.05);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).wait(1).to({x:1011.7313,y:497.0683},0).wait(1).to({x:1021.2625,y:505.4331},0).wait(1).to({x:1030.7938,y:517.2282},0).wait(1).to({x:1040.325,y:512.8061},0).wait(1).to({x:1049.8563,y:501.3284},0).wait(1).to({x:1059.3875,y:494.8472},0).wait(1).to({x:1068.9092},0).wait(1).to({x:1078.45,y:501.3284},0).wait(1).to({x:1087.9813,y:512.8061},0).wait(1).to({x:1097.5125,y:517.2282},0).wait(1).to({x:1107.0438,y:505.4331},0).wait(1).to({x:1116.575,y:497.0683},0).wait(1).to({x:1126.1063,y:494.05},0).wait(1).to({x:1135.628,y:497.0683},0).wait(1).to({x:1145.1688,y:505.4331},0).wait(1).to({x:1154.7,y:517.2282},0).wait(1).to({x:1164.2313,y:512.8061},0).wait(1).to({x:1173.7625,y:501.3284},0).wait(1).to({x:1183.2938,y:494.8472},0).wait(1).to({x:1192.825},0).wait(1).to({x:1202.3563,y:501.3284},0).wait(1).to({x:1211.8875,y:512.8061},0).wait(1).to({x:1221.4188,y:517.2282},0).wait(1).to({x:1230.95,y:505.4331},0).wait(1).to({x:1240.4717,y:497.0683},0).wait(1).to({x:1250.0125,y:494.05},0).wait(1).to({x:1259.5438,y:497.0683},0).wait(1).to({x:1269.0655,y:505.4331},0).wait(1).to({x:1278.6063,y:517.2282},0).wait(1).to({x:1288.1375,y:512.8061},0).wait(1).to({x:1297.6592,y:501.3284},0).wait(1).to({x:1307.2,y:494.8472},0).wait(1).to({scaleX:0.7444,x:1300.2683},0).wait(1).to({scaleX:0.4888,x:1293.3365,y:501.3284},0).wait(1).to({scaleX:0.2331,x:1286.4048,y:512.8061},0).wait(1).to({scaleX:0.0225,skewY:180,x:1279.473,y:517.2282},0).wait(1).to({x:1269.9119,y:505.4331},0).wait(1).to({x:1260.3507,y:497.0683},0).wait(1).to({x:1250.7991,y:494.05},0).wait(1).to({x:1241.2284,y:497.0683},0).wait(1).to({x:1231.6673,y:505.4331},0).wait(1).to({x:1222.1157,y:517.2282},0).wait(1).to({x:1212.545,y:512.8061},0).wait(1).to({x:1202.9839,y:501.3284},0).wait(1).to({x:1193.4228,y:494.8472},0).wait(1).to({x:1183.8616},0).wait(1).to({x:1174.31,y:501.3284},0).wait(1).to({x:1164.7489,y:512.8061},0).wait(1).to({x:1155.1782,y:517.2282},0).wait(1).to({x:1145.6171,y:505.4331},0).wait(1).to({x:1136.0559,y:497.0683},0).wait(1).to({x:1126.4948,y:494.05},0).wait(1).to({x:1116.9337,y:497.0683},0).wait(1).to({x:1107.3725,y:505.4331},0).wait(1).to({x:1097.8114,y:517.2282},0).wait(1).to({x:1088.2502,y:512.8061},0).wait(1).to({x:1078.6891,y:501.3284},0).wait(1).to({x:1069.1375,y:494.8472},0).wait(1).to({x:1059.5668},0).wait(1).to({x:1050.0153,y:501.3284},0).wait(1).to({x:1040.4541,y:512.8061},0).wait(1).to({x:1030.8834,y:517.2282},0).wait(1).to({x:1021.3223,y:505.4331},0).wait(1).to({x:1011.7611,y:497.0683},0).wait(1).to({x:1002.2,y:494.05},0).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.поросята = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_365 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(365).call(this.frame_365).wait(1));

	// house3_obj_
	this.house3 = new lib.Монтажный_кадр_1_house3();
	this.house3.name = "house3";
	this.house3.parent = this;
	this.house3.depth = 0;
	this.house3.isAttachedToCamera = 0
	this.house3.isAttachedToMask = 0
	this.house3.layerDepth = 0
	this.house3.layerIndex = 0
	this.house3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.house3).wait(366));

	// house2_obj_
	this.house2 = new lib.Монтажный_кадр_1_house2();
	this.house2.name = "house2";
	this.house2.parent = this;
	this.house2.depth = 0;
	this.house2.isAttachedToCamera = 0
	this.house2.isAttachedToMask = 0
	this.house2.layerDepth = 0
	this.house2.layerIndex = 1
	this.house2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.house2).wait(167).to({_off:true},1).wait(198));

	// house1_obj_
	this.house1 = new lib.Монтажный_кадр_1_house1();
	this.house1.name = "house1";
	this.house1.parent = this;
	this.house1.depth = 0;
	this.house1.isAttachedToCamera = 0
	this.house1.isAttachedToMask = 0
	this.house1.layerDepth = 0
	this.house1.layerIndex = 2
	this.house1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.house1).wait(107).to({_off:true},50).wait(209));

	// sad_obj_
	this.sad = new lib.Монтажный_кадр_1_sad();
	this.sad.name = "sad";
	this.sad.parent = this;
	this.sad.depth = 0;
	this.sad.isAttachedToCamera = 0
	this.sad.isAttachedToMask = 0
	this.sad.layerDepth = 0
	this.sad.layerIndex = 3
	this.sad.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sad).wait(315).to({_off:true},1).wait(50));

	// whoooooosh_obj_
	this.whoooooosh = new lib.Монтажный_кадр_1_whoooooosh();
	this.whoooooosh.name = "whoooooosh";
	this.whoooooosh.parent = this;
	this.whoooooosh.depth = 0;
	this.whoooooosh.isAttachedToCamera = 0
	this.whoooooosh.isAttachedToMask = 0
	this.whoooooosh.layerDepth = 0
	this.whoooooosh.layerIndex = 4
	this.whoooooosh.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.whoooooosh).wait(264).to({_off:true},10).wait(92));

	// wolf_obj_
	this.wolf = new lib.Монтажный_кадр_1_wolf();
	this.wolf.name = "wolf";
	this.wolf.parent = this;
	this.wolf.depth = 0;
	this.wolf.isAttachedToCamera = 0
	this.wolf.isAttachedToMask = 0
	this.wolf.layerDepth = 0
	this.wolf.layerIndex = 5
	this.wolf.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wolf).wait(256).to({_off:true},8).wait(102));

	// pig3_obj_
	this.pig3 = new lib.Монтажный_кадр_1_pig3();
	this.pig3.name = "pig3";
	this.pig3.parent = this;
	this.pig3.depth = 0;
	this.pig3.isAttachedToCamera = 0
	this.pig3.isAttachedToMask = 0
	this.pig3.layerDepth = 0
	this.pig3.layerIndex = 6
	this.pig3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pig3).wait(92).to({_off:true},2).wait(272));

	// pig2_obj_
	this.pig2 = new lib.Монтажный_кадр_1_pig2();
	this.pig2.name = "pig2";
	this.pig2.parent = this;
	this.pig2.depth = 0;
	this.pig2.isAttachedToCamera = 0
	this.pig2.isAttachedToMask = 0
	this.pig2.layerDepth = 0
	this.pig2.layerIndex = 7
	this.pig2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pig2).wait(187).to({_off:true},1).wait(178));

	// Слой_8_obj_
	this.Слой_8 = new lib.Монтажный_кадр_1_Слой_8();
	this.Слой_8.name = "Слой_8";
	this.Слой_8.parent = this;
	this.Слой_8.depth = 0;
	this.Слой_8.isAttachedToCamera = 0
	this.Слой_8.isAttachedToMask = 0
	this.Слой_8.layerDepth = 0
	this.Слой_8.layerIndex = 8
	this.Слой_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_8).wait(106).to({regX:1154.7,regY:505.6,x:1154.7,y:505.6},0).wait(64).to({_off:true},1).wait(195));

	// pig1_obj_
	this.pig1 = new lib.Монтажный_кадр_1_pig1();
	this.pig1.name = "pig1";
	this.pig1.parent = this;
	this.pig1.depth = 0;
	this.pig1.isAttachedToCamera = 0
	this.pig1.isAttachedToMask = 0
	this.pig1.layerDepth = 0
	this.pig1.layerIndex = 9
	this.pig1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pig1).wait(187).to({_off:true},1).wait(178));

	// Слой_12_obj_
	this.Слой_12 = new lib.Монтажный_кадр_1_Слой_12();
	this.Слой_12.name = "Слой_12";
	this.Слой_12.parent = this;
	this.Слой_12.depth = 0;
	this.Слой_12.isAttachedToCamera = 0
	this.Слой_12.isAttachedToMask = 0
	this.Слой_12.layerDepth = 0
	this.Слой_12.layerIndex = 10
	this.Слой_12.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_12).wait(328).to({regX:842,regY:415,x:842,y:415},0).wait(38));

	// thd_pig_obj_
	this.thd_pig = new lib.Монтажный_кадр_1_thd_pig();
	this.thd_pig.name = "thd_pig";
	this.thd_pig.parent = this;
	this.thd_pig.setTransform(1099.5,507.9,1,1,0,0,0,1099.5,507.9);
	this.thd_pig.depth = 0;
	this.thd_pig.isAttachedToCamera = 0
	this.thd_pig.isAttachedToMask = 0
	this.thd_pig.layerDepth = 0
	this.thd_pig.layerIndex = 11
	this.thd_pig.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.thd_pig).wait(338).to({_off:true},12).wait(16));

	// Слой_11_obj_
	this.Слой_11 = new lib.Монтажный_кадр_1_Слой_11();
	this.Слой_11.name = "Слой_11";
	this.Слой_11.parent = this;
	this.Слой_11.depth = 0;
	this.Слой_11.isAttachedToCamera = 0
	this.Слой_11.isAttachedToMask = 0
	this.Слой_11.layerDepth = 0
	this.Слой_11.layerIndex = 12
	this.Слой_11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_11).wait(366));

	// sec_pig_obj_
	this.sec_pig = new lib.Монтажный_кадр_1_sec_pig();
	this.sec_pig.name = "sec_pig";
	this.sec_pig.parent = this;
	this.sec_pig.setTransform(782.6,497.9,1,1,0,0,0,782.6,497.9);
	this.sec_pig.depth = 0;
	this.sec_pig.isAttachedToCamera = 0
	this.sec_pig.isAttachedToMask = 0
	this.sec_pig.layerDepth = 0
	this.sec_pig.layerIndex = 13
	this.sec_pig.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sec_pig).wait(366));

	// first_pig___копия_obj_
	this.first_pig___копия = new lib.Монтажный_кадр_1_first_pig___копия();
	this.first_pig___копия.name = "first_pig___копия";
	this.first_pig___копия.parent = this;
	this.first_pig___копия.depth = 0;
	this.first_pig___копия.isAttachedToCamera = 0
	this.first_pig___копия.isAttachedToMask = 0
	this.first_pig___копия.layerDepth = 0
	this.first_pig___копия.layerIndex = 14
	this.first_pig___копия.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.first_pig___копия).wait(313).to({x:228.8,y:289.65},0).wait(23).to({x:0,y:0},5).wait(25));

	// first_pig_obj_
	this.first_pig = new lib.Монтажный_кадр_1_first_pig();
	this.first_pig.name = "first_pig";
	this.first_pig.parent = this;
	this.first_pig.setTransform(491.9,498.5,1,1,0,0,0,491.9,498.5);
	this.first_pig.depth = 0;
	this.first_pig.isAttachedToCamera = 0
	this.first_pig.isAttachedToMask = 0
	this.first_pig.layerDepth = 0
	this.first_pig.layerIndex = 15
	this.first_pig.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.first_pig).wait(357).to({_off:true},1).wait(8));

	// фон_obj_
	this.фон = new lib.Монтажный_кадр_1_фон();
	this.фон.name = "фон";
	this.фон.parent = this;
	this.фон.setTransform(2319.9,354,1,1,0,0,0,2319.9,354);
	this.фон.depth = 0;
	this.фон.isAttachedToCamera = 0
	this.фон.isAttachedToMask = 0
	this.фон.layerDepth = 0
	this.фон.layerIndex = 16
	this.фон.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.фон).wait(366));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1076.6,257,5732.5,554);
// library properties:
lib.properties = {
	id: 'F68C64DC027ED242A2380541176A49A9',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bacl.jpg", id:"bacl"},
		{src:"images/практика 2_atlas_.png", id:"практика 2_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F68C64DC027ED242A2380541176A49A9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;