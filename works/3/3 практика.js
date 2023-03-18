(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"3 практика_atlas_", frames: [[0,0,1731,577],[478,854,476,371],[0,579,802,273],[804,579,802,273],[0,854,476,371]]}
];


// symbols:



(lib.backk = function() {
	this.initialize(ss["3 практика_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.initialize(ss["3 практика_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.carrpngкопия = function() {
	this.initialize(ss["3 практика_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wheel_right = function() {
	this.initialize(ss["3 практика_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wing1 = function() {
	this.initialize(ss["3 практика_atlas_"]);
	this.gotoAndStop(4);
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


(lib.Символ_4_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.backk();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.2581,1.2582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_4_Слой_1, null, null);


(lib.Символ_3_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheel_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_3_Слой_1, null, null);


(lib.Символ_1_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wing1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5369,0.5369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_1_Слой_1, null, null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_4_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(1088.9,363,1,1,0,0,0,1088.9,363);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,2177.8,726), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_3_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(401,136.5,1,1,0,0,0,401,136.5);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,802,273), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_1_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(127.8,99.6,1,1,0,0,0,127.8,99.6);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,255.6,199.2), null);


(lib.Монтажный_кадр_1_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(190.9,363,1,1,0,0,0,1088.9,363);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:194},0).wait(1).to({x:197.05},0).wait(1).to({x:200.15},0).wait(1).to({x:203.2},0).wait(1).to({x:206.25},0).wait(1).to({x:209.35},0).wait(1).to({x:212.4},0).wait(1).to({x:215.45},0).wait(1).to({x:218.55},0).wait(1).to({x:221.6},0).wait(1).to({x:224.65},0).wait(1).to({x:227.75},0).wait(1).to({x:230.8},0).wait(1).to({x:233.85},0).wait(1).to({x:236.95},0).wait(1).to({x:240},0).wait(1).to({x:243.05},0).wait(1).to({x:246.15},0).wait(1).to({x:249.2},0).wait(1).to({x:252.25},0).wait(1).to({x:255.35},0).wait(1).to({x:258.4},0).wait(1).to({x:261.45},0).wait(1).to({x:264.55},0).wait(1).to({x:267.6},0).wait(1).to({x:270.65},0).wait(1).to({x:273.75},0).wait(1).to({x:276.8},0).wait(1).to({x:279.85},0).wait(1).to({x:282.95},0).wait(1).to({x:286},0).wait(1).to({x:289.05},0).wait(1).to({x:292.15},0).wait(1).to({x:295.2},0).wait(1).to({x:298.25},0).wait(1).to({x:301.35},0).wait(1).to({x:304.4},0).wait(1).to({x:307.45},0).wait(1).to({x:310.55},0).wait(1).to({x:313.6},0).wait(1).to({x:316.65},0).wait(1).to({x:319.75},0).wait(1).to({x:322.8},0).wait(1).to({x:325.85},0).wait(1).to({x:328.95},0).wait(1).to({x:332},0).wait(1).to({x:335.05},0).wait(1).to({x:338.15},0).wait(1).to({x:341.2},0).wait(1).to({x:344.25},0).wait(1).to({x:347.35},0).wait(1).to({x:350.4},0).wait(1).to({x:353.45},0).wait(1).to({x:356.55},0).wait(1).to({x:359.6},0).wait(1).to({x:362.65},0).wait(1).to({x:365.75},0).wait(1).to({x:368.8},0).wait(1).to({x:371.85},0).wait(1).to({x:374.95},0).wait(1).to({x:378},0).wait(1).to({x:381.05},0).wait(1).to({x:384.15},0).wait(1).to({x:387.2},0).wait(1).to({x:390.25},0).wait(1).to({x:393.35},0).wait(1).to({x:396.4},0).wait(1).to({x:399.45},0).wait(1).to({x:402.55},0).wait(1).to({x:405.6},0).wait(1).to({x:408.65},0).wait(1).to({x:411.75},0).wait(1).to({x:414.8},0).wait(1).to({x:417.85},0).wait(1).to({x:420.95},0).wait(1).to({x:424},0).wait(1).to({x:427.05},0).wait(1).to({x:430.15},0).wait(1).to({x:433.2},0).wait(1).to({x:436.25},0).wait(1).to({x:439.35},0).wait(1).to({x:442.4},0).wait(1).to({x:445.45},0).wait(1).to({x:448.55},0).wait(1).to({x:451.6},0).wait(1).to({x:454.65},0).wait(1).to({x:457.75},0).wait(1).to({x:460.8},0).wait(1).to({x:463.85},0).wait(1).to({x:466.95},0).wait(1).to({x:470},0).wait(1).to({x:473.05},0).wait(1).to({x:476.15},0).wait(1).to({x:479.2},0).wait(1).to({x:482.25},0).wait(1).to({x:485.35},0).wait(1).to({x:488.4},0).wait(1).to({x:491.5},0).wait(1).to({x:494.55},0).wait(1).to({x:497.6},0).wait(1).to({x:500.7},0).wait(1).to({x:503.75},0).wait(1).to({x:506.8},0).wait(1).to({x:509.9},0).wait(1).to({x:512.95},0).wait(1).to({x:516},0).wait(1).to({x:519.1},0).wait(1).to({x:522.15},0).wait(1).to({x:525.2},0).wait(1).to({x:528.3},0).wait(1).to({x:531.35},0).wait(1).to({x:534.4},0).wait(1).to({x:537.5},0).wait(1).to({x:540.55},0).wait(1).to({x:543.6},0).wait(1).to({x:546.7},0).wait(1).to({x:549.75},0).wait(1).to({x:552.8},0).wait(1).to({x:555.9},0).wait(1).to({x:558.95},0).wait(1).to({x:562},0).wait(1).to({x:565.1},0).wait(1).to({x:568.15},0).wait(1).to({x:571.2},0).wait(1).to({x:574.3},0).wait(1).to({x:577.35},0).wait(1).to({x:580.4},0).wait(1).to({x:583.5},0).wait(1).to({x:586.55},0).wait(1).to({x:589.6},0).wait(1).to({x:592.7},0).wait(1).to({x:595.75},0).wait(1).to({x:598.8},0).wait(1).to({x:601.9},0).wait(1).to({x:604.95},0).wait(1).to({x:608},0).wait(1).to({x:611.1},0).wait(1).to({x:614.15},0).wait(1).to({x:617.2},0).wait(1).to({x:620.3},0).wait(1).to({x:623.35},0).wait(1).to({x:626.4},0).wait(1).to({x:629.5},0).wait(1).to({x:632.55},0).wait(1).to({x:635.6},0).wait(1).to({x:638.7},0).wait(1).to({x:641.75},0).wait(1).to({x:644.8},0).wait(1).to({x:647.9},0).wait(1).to({x:650.95},0).wait(1).to({x:654},0).wait(1).to({x:657.1},0).wait(1).to({x:660.15},0).wait(1).to({x:663.2},0).wait(1).to({x:666.3},0).wait(1).to({x:669.35},0).wait(1).to({x:672.4},0).wait(1).to({x:675.5},0).wait(1).to({x:678.55},0).wait(1).to({x:681.6},0).wait(1).to({x:684.7},0).wait(1).to({x:687.75},0).wait(1).to({x:690.8},0).wait(1).to({x:693.9},0).wait(1).to({x:696.95},0).wait(1).to({x:700},0).wait(1).to({x:703.1},0).wait(1).to({x:706.15},0).wait(1).to({x:709.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.wing_1_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(127.8,99.6,1,1,0,0,0,127.8,99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.2134,x:127.75,y:100.15},0).wait(1).to({rotation:4.4267,y:100.55},0).wait(1).to({rotation:6.6401,x:127.8,y:101.05},0).wait(1).to({rotation:8.8534,y:101.45},0).wait(1).to({rotation:11.0668,x:127.75,y:102},0).wait(1).to({rotation:13.2801,y:102.45},0).wait(1).to({rotation:15.4935,y:102.95},0).wait(1).to({rotation:17.7068,y:103.35},0).wait(1).to({rotation:19.9202,y:103.85},0).wait(1).to({rotation:22.1335,x:127.8,y:104.3},0).wait(1).to({rotation:24.3469,y:104.8},0).wait(1).to({rotation:26.5602,x:127.75,y:105.25},0).wait(1).to({rotation:28.7736,y:105.7},0).wait(1).to({rotation:30.9869,y:106.2},0).wait(1).to({rotation:33.2003,y:106.7},0).wait(1).to({rotation:30.3001,x:127.8,y:106.45},0).wait(1).to({rotation:27.3999,x:127.75,y:106.2},0).wait(1).to({rotation:24.4997,x:127.8,y:106},0).wait(1).to({rotation:21.5995,y:105.75},0).wait(1).to({rotation:18.6993,x:127.75,y:105.55},0).wait(1).to({rotation:15.7991,y:105.35},0).wait(1).to({rotation:12.8989,y:105.15},0).wait(1).to({rotation:9.9987,y:104.9},0).wait(1).to({rotation:7.0985,y:104.7},0).wait(1).to({rotation:4.1983,y:104.45},0).wait(1).to({rotation:1.2981,y:104.15},0).wait(1).to({rotation:-1.6021,x:127.85,y:103.95},0).wait(1).to({rotation:-4.5023,x:127.8,y:103.7},0).wait(1).to({rotation:-7.4025,x:127.85,y:103.5},0).wait(1).to({rotation:-10.3027,x:127.8,y:103.3},0).wait(1).to({rotation:-13.2029,y:103.05},0).wait(1).to({rotation:-16.1031,y:102.85},0).wait(1).to({rotation:-19.0033,x:127.85,y:102.6},0).wait(1).to({rotation:-21.9035,x:127.8,y:102.4},0).wait(1).to({rotation:-20.2186,x:127.75,y:102.2},0).wait(1).to({rotation:-18.5337,x:127.8,y:102},0).wait(1).to({rotation:-16.8488,y:101.7},0).wait(1).to({rotation:-15.164,y:101.55},0).wait(1).to({rotation:-13.4791,x:127.85,y:101.3},0).wait(1).to({rotation:-11.7942,x:127.8,y:101.1},0).wait(1).to({rotation:-10.1093,x:127.85,y:100.85},0).wait(1).to({rotation:-8.4244,x:127.8,y:100.65},0).wait(1).to({rotation:-6.7395,y:100.45},0).wait(1).to({rotation:-5.0547,x:127.85,y:100.2},0).wait(1).to({rotation:-3.3698,y:100.05},0).wait(1).to({rotation:-1.6849,y:99.8},0).wait(1).to({rotation:0,x:127.8,y:99.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.wheel_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(615.8,200.2,1,1,0,0,0,615.8,200.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:401,regY:136.5,rotation:-32.7273,x:400.65,y:262.7},0).wait(1).to({rotation:-65.4545,x:468.55,y:369.1},0).wait(1).to({rotation:-98.1818,x:583.2,y:421.9},0).wait(1).to({rotation:-130.9091,x:708.15,y:404.25},0).wait(1).to({rotation:-163.6364,x:803.8,y:321.95},0).wait(1).to({rotation:-196.3636,x:839.75,y:200.9},0).wait(1).to({rotation:-229.0909,x:804.55,y:79.7},0).wait(1).to({rotation:-261.8182,x:709.4,y:-3.2},0).wait(1).to({rotation:-294.5455,x:584.55,y:-21.55},0).wait(1).to({rotation:-327.2727,x:469.55,y:30.55},0).wait(1).to({rotation:-360,x:401,y:136.5},0).wait(1).to({rotation:-392.7273,x:400.65,y:262.7},0).wait(1).to({rotation:-425.4545,x:468.55,y:369.1},0).wait(1).to({rotation:-458.1818,x:583.2,y:421.9},0).wait(1).to({rotation:-490.9091,x:708.15,y:404.25},0).wait(1).to({rotation:-523.6364,x:803.8,y:321.95},0).wait(1).to({rotation:-556.3636,x:839.75,y:200.9},0).wait(1).to({rotation:-589.0909,x:804.55,y:79.7},0).wait(1).to({rotation:-621.8182,x:709.4,y:-3.2},0).wait(1).to({rotation:-654.5455,x:584.55,y:-21.55},0).wait(1).to({rotation:-687.2727,x:469.55,y:30.55},0).wait(1).to({rotation:-720,x:401,y:136.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.wheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Слой_1_obj_
	this.Слой_1 = new lib.wheel_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(401,136.5,1,1,0,0,0,401,136.5);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1).to({regX:626.2,regY:197.6,x:626.2,y:197.6},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-442.2,1272.3000000000002,1279.9);


(lib.car_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(863,136.5,1,1,0,0,0,401,136.5);

	this.instance_1 = new lib.wheel();
	this.instance_1.parent = this;
	this.instance_1.setTransform(401,136.5,1,1,0,0,0,401,136.5);

	this.instance_2 = new lib.carrpngкопия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(461.7,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_Слой_1, null, null);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.car_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(632,136.5,1,1,0,0,0,632,136.5);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(0,0,1264,273.1), null);


(lib.Монтажный_кадр_1_MergedLayer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MergedLayer_4
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(1602.45,556.5,1,1,0,0,0,632,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:857.2,regY:197.6,x:1814.15,y:617.6},0).wait(1).to({x:1800.7},0).wait(1).to({x:1787.2},0).wait(1).to({x:1773.75},0).wait(1).to({x:1760.25},0).wait(1).to({x:1746.8},0).wait(1).to({x:1733.3},0).wait(1).to({x:1719.85},0).wait(1).to({x:1706.35},0).wait(1).to({x:1692.9},0).wait(1).to({x:1679.4},0).wait(1).to({x:1665.95},0).wait(1).to({x:1652.45},0).wait(1).to({x:1639},0).wait(1).to({x:1625.5},0).wait(1).to({x:1612.05},0).wait(1).to({x:1598.55},0).wait(1).to({x:1585.1},0).wait(1).to({x:1571.6},0).wait(1).to({x:1558.15},0).wait(1).to({x:1544.65},0).wait(1).to({x:1531.2},0).wait(1).to({x:1517.7},0).wait(1).to({x:1504.25},0).wait(1).to({x:1490.75},0).wait(1).to({x:1477.3},0).wait(1).to({x:1463.8},0).wait(1).to({x:1450.35},0).wait(1).to({x:1436.85},0).wait(1).to({x:1423.4},0).wait(1).to({x:1409.9},0).wait(1).to({x:1396.45},0).wait(1).to({x:1382.95},0).wait(1).to({x:1369.5},0).wait(1).to({x:1356},0).wait(1).to({x:1342.55},0).wait(1).to({x:1329.05},0).wait(1).to({x:1315.6},0).wait(1).to({x:1302.1},0).wait(1).to({x:1288.65},0).wait(1).to({x:1275.15},0).wait(1).to({x:1261.7},0).wait(1).to({x:1248.2},0).wait(1).to({x:1234.75},0).wait(1).to({x:1221.25},0).wait(1).to({x:1207.8},0).wait(1).to({x:1194.3},0).wait(1).to({x:1180.85},0).wait(1).to({x:1167.35},0).wait(1).to({x:1153.9},0).wait(1).to({x:1140.4},0).wait(1).to({x:1126.95},0).wait(1).to({x:1113.45},0).wait(1).to({x:1100},0).wait(1).to({x:1086.5},0).wait(1).to({x:1073.05},0).wait(1).to({x:1059.6},0).wait(1).to({x:1046.1},0).wait(1).to({x:1032.65},0).wait(1).to({x:1019.15},0).wait(1).to({x:1005.7},0).wait(1).to({x:992.2},0).wait(1).to({x:978.75},0).wait(1).to({x:965.25},0).wait(1).to({x:951.8},0).wait(1).to({x:938.3},0).wait(1).to({x:924.85},0).wait(1).to({x:911.35},0).wait(1).to({x:897.9},0).wait(1).to({x:884.4},0).wait(1).to({x:870.95},0).wait(1).to({x:857.45},0).wait(1).to({x:844.05},0).wait(1).to({x:830.55},0).wait(1).to({x:817.1},0).wait(1).to({x:803.6},0).wait(1).to({x:790.15},0).wait(1).to({x:776.65},0).wait(1).to({x:763.2},0).wait(1).to({x:749.7},0).wait(1).to({x:736.25},0).wait(1).to({x:722.75},0).wait(1).to({x:709.3},0).wait(1).to({x:695.8},0).wait(1).to({x:682.35},0).wait(1).to({x:668.85},0).wait(1).to({x:655.4},0).wait(1).to({x:641.9},0).wait(1).to({x:628.45},0).wait(1).to({x:614.95},0).wait(1).to({x:601.5},0).wait(1).to({x:588},0).wait(1).to({x:574.55},0).wait(1).to({x:561.05},0).wait(1).to({x:547.6},0).wait(1).to({x:534.1},0).wait(1).to({x:520.65},0).wait(1).to({x:507.15},0).wait(1).to({x:493.7},0).wait(1).to({x:480.2},0).wait(1).to({x:466.75},0).wait(1).to({x:453.25},0).wait(1).to({x:439.8},0).wait(1).to({x:426.3},0).wait(1).to({x:412.85},0).wait(1).to({x:399.35},0).wait(1).to({x:385.9},0).wait(1).to({x:372.4},0).wait(1).to({x:358.95},0).wait(1).to({x:345.45},0).wait(1).to({x:332},0).wait(1).to({x:318.5},0).wait(1).to({x:305.05},0).wait(1).to({x:291.6},0).wait(1).to({x:278.1},0).wait(1).to({x:264.65},0).wait(1).to({x:251.15},0).wait(1).to({x:237.7},0).wait(1).to({x:224.2},0).wait(1).to({x:210.75},0).wait(1).to({x:197.25},0).wait(1).to({x:183.8},0).wait(1).to({x:170.3},0).wait(1).to({x:156.85},0).wait(1).to({x:143.35},0).wait(1).to({x:129.9},0).wait(1).to({x:116.4},0).wait(1).to({x:102.95},0).wait(1).to({x:89.45},0).wait(1).to({x:76},0).wait(1).to({x:62.5},0).wait(1).to({x:49.05},0).wait(1).to({x:35.55},0).wait(1).to({x:22.1},0).wait(1).to({x:8.6},0).wait(1).to({x:-4.85},0).wait(1).to({x:-18.35},0).wait(1).to({x:-31.8},0).wait(1).to({x:-45.3},0).wait(1).to({x:-58.75},0).wait(1).to({x:-72.25},0).wait(1).to({x:-85.7},0).wait(1).to({x:-99.2},0).wait(1).to({x:-112.65},0).wait(1).to({x:-126.15},0).wait(1).to({x:-139.6},0).wait(1).to({x:-153.1},0).wait(1).to({x:-166.55},0).wait(1).to({x:-180.05},0).wait(1).to({x:-193.5},0).wait(1).to({x:-207},0).wait(1).to({x:-220.45},0).wait(1).to({x:-233.95},0).wait(1).to({x:-247.4},0).wait(1).to({x:-260.9},0).wait(1).to({x:-274.35},0).wait(1).to({x:-287.85},0).wait(1).to({x:-301.3},0).wait(1).to({x:-314.8},0).wait(1).to({x:-328.25},0).wait(1).to({x:-341.75},0).wait(1).to({x:-355.2},0).wait(1).to({x:-368.7},0).wait(1).to({x:-382.15},0).wait(1).to({x:-395.65},0).wait(1).to({x:-409.1},0).wait(1).to({x:-422.6},0).wait(1).to({x:-436.05},0).wait(1).to({x:-449.55},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.wing1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Слой_1_obj_
	this.Слой_1 = new lib.wing_1_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(127.8,99.6,1,1,0,0,0,127.8,99.6);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1).to({regY:106.6,y:106.6},0).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-46.3,322.4,305.90000000000003);


(lib.bird_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wing1_1();
	this.instance.parent = this;
	this.instance.setTransform(127.8,99.6,1,1,0,0,0,127.8,99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bird_Слой_1, null, null);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.bird_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(127.8,99.6,1,1,0,0,0,127.8,99.6);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bird, new cjs.Rectangle(0,0,255.6,199.2), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wing1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,127.8,99.6);

	this.instance_1 = new lib.body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127.8,-99.6,0.537,0.5367);

	this.instance_2 = new lib.wing1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.05,-12.45,0.504,0.504,-14.9971,0,0,127.8,99.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.8,-99.6,255.6,199.2);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bird();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0,1,1,0,0,0,127.8,99.6);

	this.instance_1 = new lib.body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127.7,-99.6,0.537,0.5367);

	this.instance_2 = new lib.wing1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.15,-12.45,0.504,0.504,-14.9971,0,0,127.8,99.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-99.6,255.8,199.2);


(lib.Монтажный_кадр_1_MergedLayer_1___копия___копия___копия_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MergedLayer_1___копия___копия___копия
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1558.85,285.45,0.5869,0.5869,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({guide:{path:[1558.8,285.5,1408.1,248.3,1226.8,208.9,864.3,130.3,711.5,119.7,580.6,110.5,484.4,106.3,330.8,99.5,197.9,100.9,-54.3,103.6,-236.6,135.4]}},78).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_MergedLayer_1___копия___копия___копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MergedLayer_1___копия___копия___копия
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1416.55,368.2,0.5869,0.5869,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).to({_off:false},0).to({regY:0.1,scaleX:0.5868,scaleY:0.5868,guide:{path:[1416.6,368.2,1401.8,355.7,1377.5,336.7,1328.9,298.7,1281.2,266.1,1128.8,161.8,1043.5,151.2,997.7,145.5,928.3,157.4,884.9,164.8,792.7,187.8,693.7,212.5,644.8,221.8,559.7,238.2,492.6,239,419.3,239.8,381.5,233.5,347.4,227.7,318.3,211.5,307.7,205.6,289.2,193.5,262.1,175.9,253.3,170.4,200.9,137.5,136.7,107.4,67.8,74.9,36.9,44,25.6,32.7,16.5,18.7,7.1,3.1,2.3,-4.5,-6.1,-17.6,-15.7,-27.1,-28.2,-39.4,-47.5,-50.7,-92.8,-77.3,-192.5,-107.2]}},64).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_MergedLayer_1___копия___копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MergedLayer_1___копия___копия
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1730.65,390.8,0.5869,0.5869,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({guide:{path:[1730.6,390.8,1579.9,353.6,1398.6,314.2,1036.1,235.5,883.3,224.9,752.4,215.7,656.2,211.5,502.6,204.7,369.7,206.1,6,209.9,-212.3,274.5]}},78).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_MergedLayer_1___копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MergedLayer_1___копия
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1730.65,390.8,0.5869,0.5869,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({guide:{path:[1730.6,390.8,1579.9,353.6,1398.6,314.2,1036.1,235.5,883.3,224.9,752.4,215.7,656.2,211.5,502.6,204.7,369.7,206.1,6,209.9,-212.3,274.5]}},86).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_MergedLayer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MergedLayer_1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1305.7,117.6);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-162.45,139.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},95).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,guide:{path:[1305.5,117.6,1275.6,120.5,1226.6,124.2,1128.7,131.7,1033.6,135.5,729.2,147.9,566.9,120.1,474.6,104.3,379.7,100.5,296.9,97.2,202,102.8,130,107.1,24.4,118.6,-35.8,125.1,-162.4,139.3]}},95).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._3практика = function(mode,startPosition,loop) {
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
	this.frame_169 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(1));

	// MergedLayer_4_obj_
	this.MergedLayer_4 = new lib.Монтажный_кадр_1_MergedLayer_4();
	this.MergedLayer_4.name = "MergedLayer_4";
	this.MergedLayer_4.parent = this;
	this.MergedLayer_4.setTransform(1602.5,556.5,1,1,0,0,0,1602.5,556.5);
	this.MergedLayer_4.depth = 0;
	this.MergedLayer_4.isAttachedToCamera = 0
	this.MergedLayer_4.isAttachedToMask = 0
	this.MergedLayer_4.layerDepth = 0
	this.MergedLayer_4.layerIndex = 0
	this.MergedLayer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MergedLayer_4).wait(1).to({regX:689.1,regY:617.6,x:689.1,y:617.6},0).wait(169));

	// MergedLayer_1___копия___копия___копия_obj_
	this.MergedLayer_1___копия___копия___копия = new lib.Монтажный_кадр_1_MergedLayer_1___копия___копия___копия();
	this.MergedLayer_1___копия___копия___копия.name = "MergedLayer_1___копия___копия___копия";
	this.MergedLayer_1___копия___копия___копия.parent = this;
	this.MergedLayer_1___копия___копия___копия.depth = 0;
	this.MergedLayer_1___копия___копия___копия.isAttachedToCamera = 0
	this.MergedLayer_1___копия___копия___копия.isAttachedToMask = 0
	this.MergedLayer_1___копия___копия___копия.layerDepth = 0
	this.MergedLayer_1___копия___копия___копия.layerIndex = 1
	this.MergedLayer_1___копия___копия___копия.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MergedLayer_1___копия___копия___копия).wait(62).to({x:3.6,y:-2.25},0).wait(64).to({_off:true},1).wait(43));

	// MergedLayer_1___копия___копия___копия_obj_
	this.MergedLayer_1___копия___копия___копия_1 = new lib.Монтажный_кадр_1_MergedLayer_1___копия___копия___копия_1();
	this.MergedLayer_1___копия___копия___копия_1.name = "MergedLayer_1___копия___копия___копия_1";
	this.MergedLayer_1___копия___копия___копия_1.parent = this;
	this.MergedLayer_1___копия___копия___копия_1.depth = 0;
	this.MergedLayer_1___копия___копия___копия_1.isAttachedToCamera = 0
	this.MergedLayer_1___копия___копия___копия_1.isAttachedToMask = 0
	this.MergedLayer_1___копия___копия___копия_1.layerDepth = 0
	this.MergedLayer_1___копия___копия___копия_1.layerIndex = 2
	this.MergedLayer_1___копия___копия___копия_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MergedLayer_1___копия___копия___копия_1).wait(90).to({x:6.9,y:107.6},0).wait(78).to({_off:true},1).wait(1));

	// MergedLayer_1___копия___копия_obj_
	this.MergedLayer_1___копия___копия = new lib.Монтажный_кадр_1_MergedLayer_1___копия___копия();
	this.MergedLayer_1___копия___копия.name = "MergedLayer_1___копия___копия";
	this.MergedLayer_1___копия___копия.parent = this;
	this.MergedLayer_1___копия___копия.depth = 0;
	this.MergedLayer_1___копия___копия.isAttachedToCamera = 0
	this.MergedLayer_1___копия___копия.isAttachedToMask = 0
	this.MergedLayer_1___копия___копия.layerDepth = 0
	this.MergedLayer_1___копия___копия.layerIndex = 3
	this.MergedLayer_1___копия___копия.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MergedLayer_1___копия___копия).wait(90).to({x:28.15,y:226.85},0).wait(78).to({_off:true},1).wait(1));

	// MergedLayer_1___копия_obj_
	this.MergedLayer_1___копия = new lib.Монтажный_кадр_1_MergedLayer_1___копия();
	this.MergedLayer_1___копия.name = "MergedLayer_1___копия";
	this.MergedLayer_1___копия.parent = this;
	this.MergedLayer_1___копия.depth = 0;
	this.MergedLayer_1___копия.isAttachedToCamera = 0
	this.MergedLayer_1___копия.isAttachedToMask = 0
	this.MergedLayer_1___копия.layerDepth = 0
	this.MergedLayer_1___копия.layerIndex = 4
	this.MergedLayer_1___копия.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MergedLayer_1___копия).wait(21).to({x:28.15,y:226.85},0).wait(86).to({_off:true},1).wait(62));

	// MergedLayer_1_obj_
	this.MergedLayer_1 = new lib.Монтажный_кадр_1_MergedLayer_1();
	this.MergedLayer_1.name = "MergedLayer_1";
	this.MergedLayer_1.parent = this;
	this.MergedLayer_1.setTransform(1305.7,117.6,1,1,0,0,0,1305.7,117.6);
	this.MergedLayer_1.depth = 0;
	this.MergedLayer_1.isAttachedToCamera = 0
	this.MergedLayer_1.isAttachedToMask = 0
	this.MergedLayer_1.layerDepth = 0
	this.MergedLayer_1.layerIndex = 5
	this.MergedLayer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MergedLayer_1).wait(95).to({_off:true},1).wait(74));

	// back_obj_
	this.back = new lib.Монтажный_кадр_1_back();
	this.back.name = "back";
	this.back.parent = this;
	this.back.setTransform(190.9,363,1,1,0,0,0,190.9,363);
	this.back.depth = 0;
	this.back.isAttachedToCamera = 0
	this.back.isAttachedToMask = 0
	this.back.layerDepth = 0
	this.back.layerIndex = 6
	this.back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1).to({regX:450.1,x:450.1},0).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-666.7,194.3,2901.2,531.7);
// library properties:
lib.properties = {
	id: '80361569FB54884E99112FDA32A55847',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/3 практика_atlas_.png", id:"3 практика_atlas_"}
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
an.compositions['80361569FB54884E99112FDA32A55847'] = {
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