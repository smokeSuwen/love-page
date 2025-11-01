function lovetime() {
    window.setTimeout("lovetime()", 1000);

    // 1. 定义时间单位（毫秒）
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;

    // 2. 设置您的起始日期 (2018年11月1日)
    // 注意：月份是从0开始的，所以 10 代表 11月。
    var startYear = 2018;
    var startMonth = 10; 
    var startDate = 1;
    var startHour = 0;
    var startMinute = 0;
    var startSecond = 0;

    var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
    var startDateObj = new Date(t1);

    // 3. 获取当前日期时间
    var today = new Date();
    var t2 = today.getTime(); // 使用本地时间

    // 4. 计算总毫秒差
    var diff = t2 - t1;

    // 5. --- 修正后的计算逻辑 ---

    // (A) 计算年份差
    var diffYears = today.getFullYear() - startDateObj.getFullYear();
    
    // (B) 检查今年的纪念日是否已经过去
    // 创建一个代表“今年”纪念日的对象
    var currentYearAnniversary = new Date(today.getFullYear(), startDateObj.getMonth(), startDateObj.getDate());
    
    if (today < currentYearAnniversary) {
        // 如果今天的日期还没到今年的纪念日，则年份 -1
        diffYears--;
    }

    // (C) 计算上一个纪念日的日期
    // (startDateObj.getFullYear() + diffYears) 即为“上一个”纪念日的年份
    var lastAnniversary = new Date(startDateObj.getFullYear() + diffYears, startDateObj.getMonth(), startDateObj.getDate());
    
    // (D) 计算距离上一个纪念日过去了多少天
    var diffDaysMs = today - lastAnniversary;
    var diffDays = Math.floor(diffDaysMs / days);

    // (E) 计算剩余的时、分、秒（基于总毫秒差）
    var diffHours = Math.floor((diff % days) / hours);
    var diffMinutes = Math.floor((diff % hours) / minutes);
    var diffSeconds = Math.floor((diff % minutes) / seconds);

    // 6. 更新显示
    document.getElementById("lovetime").innerHTML = "我们已经在一起 " + diffYears + "年" + diffDays + "天" +
        diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒啦";
}

// 立即执行一次
lovetime();