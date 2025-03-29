// 定义各题目选项点击时的y坐标随机范围
// 第一题选项栏的 y 坐标范围
var min1 = 1200;
var max1 = 1910;

// 第二题选项栏的 y 坐标范围（不同题目的坐标范围设置各不相同）
var min2 = 516; 
var max2 = 649;
var min3 = 520; 
var max3 = 1070; 
var min4 = 520;
var max4 = 1070;
// 特殊选项，可能对应后续题目不同的选项
var min5 = 520;
var max5 = 790;

var min6 = 580;
var max6 = 1200;
var min7 = 580;
var max7 = 1280;
var min7_ = 520;
var max7_ = 850;
var min8 = 580;
var max8 = 1280;
var min9 = 580;
var max9 = 900;
var min9_ = 520;
var max9_ = 1200;
var min10 = 520;
var max10 = 1220;
// 特殊题型，需要随机选择x坐标范围
var x_min10 = 310; // x 坐标下限
var x_max10 = 945; // x 坐标上限
var min11 = 580;
var max11 = 850;
var min12 = 580;
var max12 = 1000;
var min13 = 520;
var max13 = 1280;
 
// 请求屏幕截图权限，若失败则提示并退出脚本，用于识别下一页的选项
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

// 初始化调试计数器，用于记录执行次数
var count = 0;

while(true) {

    count++; // 每次循环次数加1
    log("第" + count + "次");
    sleep(200);

    // 点击问卷链接，结合个人设备修改
    click(470, 2080);
    sleep(2000);

    // 点击“从头开始作答”按钮，防止上次答案对本次产生影响（坐标: 306, 1426）
    click(306, 1426);
    sleep(200);

    // 循环模拟点击18个页面（题目或选项页面）
    for (var i = 1; i < 19; i++) {
        // 每次循环前截取当前屏幕图像
        var img = captureScreen();
        // 在指定区域内查找目标颜色点（颜色代码：#0195ff），用于定位“下一页”按钮或验证元素
        var point = findColor(img, "#0195ff", {
            region: [200, 610, 600, 1600],  // 指定区域：左上角(200,610)，宽600，高1600
            threshold: 2                   // 颜色匹配阈值，值越低要求匹配越精确
        });

        // 根据每个选项的坐标范围，生成随机的 y 坐标
        var y1   = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
        var y2   = Math.floor(Math.random() * (max2 - min2 + 1)) + min2; 
        var y3   = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;  
        var y4   = Math.floor(Math.random() * (max4 - min4 + 1)) + min4;  
        var y5   = Math.floor(Math.random() * (max5 - min5 + 1)) + min5;  
        var y6   = Math.floor(Math.random() * (max6 - min6 + 1)) + min6; 
        var y7   = Math.floor(Math.random() * (max7 - min7 + 1)) + min7;
        var y7_  = Math.floor(Math.random() * (max7_ - min7_ + 1)) + min7_;
        var y8   = Math.floor(Math.random() * (max8 - min8 + 1)) + min8;
        var y9   = Math.floor(Math.random() * (max9 - min9 + 1)) + min9;
        var y9_  = Math.floor(Math.random() * (max9_ - min9_ + 1)) + min9_;
        var y10  = Math.floor(Math.random() * (max10 - min10 + 1)) + min10;
        var y11  = Math.floor(Math.random() * (max11 - min11 + 1)) + min11;
        var y12  = Math.floor(Math.random() * (max12 - min12 + 1)) + min12;
        var y13  = Math.floor(Math.random() * (max13 - min13 + 1)) + min13;

        // 根据当前页面序号执行不同的点击操作
        switch (i) {
            case 1:
                // 第一题，点击 x 坐标固定为120，y 坐标随机
                click(120, y1);
                log("y1:" + y1);
                break;
            case 2:
                // 第二题，若计数器为偶数则点击“是”，否则点击“否”
                if (count % 2 == 0) {
                    click(200, y2); // “是”选项
                } else {
                    click(600, y2); // “否”选项
                }
                log("y2:" + y2);
                break;
            case 3:
                // 第三题，点击 x 坐标固定为120，随机 y 坐标
                click(120, y3);
                log("3:" + y3);
                break;
            case 4:
                click(120, y4);
                log("y4:" + y4);
                break;
            //第五题题型特殊，点击“是/否”不同的选项会导致后续题目不同，偶数计数时点击“是”，否则点击“否”
            case 5:
                if (count % 2 == 0) { 
                    click(120, 580);
                } else {
                    click(600, 720);
                }
                break;
            case 6:
                if (count % 2 == 0) {
                    click(120, y6);
                    sleep(200);
                    click(120, y6 + 280);
                } else {
                    click(120, y6);
                }
                break;
            case 7:
                if (count % 2 == 0) {
                    click(120, y7_);
                    sleep(200);
                    click(120, y7_ + 280);
                    sleep(200);
                    click(120, y7_ + 560);
                } else {
                    click(120, y7);
                }
                log("y7:" + y7);
                break;
            case 8:
                click(120, y8);
                log("y8:" + y8);
                break;
            case 9:
                if (count % 2 == 0) {
                    click(120, y9_);
                    sleep(200);
                } else {
                    click(120, y9);
                    sleep(200);
                    click(120, y9 + 280);
                    sleep(200);
                    click(120, y9 + 560);
                }
                log("y9:" + y9);
                break;
            case 10:
                // 第十题，偶数计数时随机从候选 x 坐标中选择，每次点击后 y 坐标增加偏移量
                if (count % 2 == 0) {
                    // 定义 x 坐标候选值数组
                    var xCandidates = [343, 538, 729, 822];
                    
                    // 初始化纵向偏移量
                    var add = 0;                
                    // 循环点击5次，每次点击不同的 y 坐标位置
                    for (var j = 0; j < 5; j++) {
                        // 随机选择一个 x 坐标
                        var x10 = xCandidates[Math.floor(Math.random() * xCandidates.length)];  
                        // 点击：x 坐标随机，y 坐标为830加上当前偏移量
                        click(x10, 830 + add);
                        sleep(200); // 每次点击后等待200毫秒
                        add += 210; // 增加偏移量，移动到下一个选项区域
                    }
                } else {
                    // 奇数计数时只进行一次随机点击
                    click(120, y10);
                }
                log("y10:" + y10);
                break;
            case 11:
                if (count % 2 == 0) {
                    click(120, y11);
                } else {
                    click(120, y11);
                    sleep(200);
                    click(120, y11 + 260);
                }
                log("y11:" + y11);
                break;
            case 12:
                if (count % 2 == 0) {
                    click(120, y12); 
                } else {
                    click(120, y12);
                    sleep(200);
                    click(120, y12 + 280);
                }
                log("y12:" + y12);
                break;
            case 13:
                if (count % 2 == 0) {
                    click(120, y12);
                }
                log("y13:" + y13);
                break;
            case 14:
                if (count % 2 == 0) {
                    click(120, y9);
                    sleep(200);
                    click(120, y9 + 280);
                    sleep(200);
                    click(120, y9 + 560);
                }
                log("y13:" + y13);
                break;
            case 15:
                if (count % 2 == 0) {
                    click(120, y10);
                }
                break;
            case 16:
                if (count % 2 == 0) {
                    click(120, y11);
                    sleep(200);
                    click(120, y11 + 250);
                }
                break;
            case 17:
                if (count % 2 == 0) {
                    click(120, y12);
                    sleep(200);
                    click(120, y12 + 280);
                }
                break;
            case 18:
                break;
            default: 
                break;
        }
        // 每次题目操作后等待300毫秒
        sleep(300);
        
        // 点击“下一页”按钮：如果之前findColor找到了目标颜色的点，则点击该点
        if (point) {
            click(point.x, point.y);
            log("找到颜色点: x=" + point.x + ", y=" + point.y);
        } else {
            log("未找到目标颜色");
        }
        sleep(300);
    }
    
    // 所有题目操作完成后，等待200毫秒并点击“智能验证”按钮（坐标: 502, 1345），刷太多会触发这个验证
    sleep(200);
    click(502, 1345);
    sleep(2500);
    
    // 滑动屏幕，模拟拖拽操作（从(210,1507)滑动到(990,1513)），滑动时间为1500毫秒
    swipe(210, 1507, 990, 1513, 1500);
    sleep(1000);
    
    // 点击返回按钮（坐标: 50, 200），返回主页面
    click(50, 200);
}
