/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v3.0.0
 * https://github.com/hustcc/timeago.js
 */

export const zhTW = function(number, index) {
  return [
    ['剛剛', '片刻後'],
    ['%s秒前', '%s秒後'],
    ['1分鐘前', '1分鐘後'],
    ['%s分鐘前', '%s分鐘後'],
    ['1小時前', '1小時後'],
    ['%s小時前', '%s小時後'],
    ['1天前', '1天後'],
    ['%s天前', '%s天後'],
    ['1周前', '1周後'],
    ['%s周前', '%s周後'],
    ['1月前', '1月後'],
    ['%s月前', '%s月後'],
    ['1年前', '1年後'],
    ['%s年前', '%s年後'],
  ][index];
};
