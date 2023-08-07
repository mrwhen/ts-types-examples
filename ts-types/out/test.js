"use strict";
// let hp: number = 100; // 基础血量
// let skill_name: string = '烈焰斩'; // 技能名字
// let is_cd: boolean = false; // 技能冷却状态
// console.log(typeof skill_name)
// skill_name = '烈焰斩';
// console.log(typeof skill_name)
// skill_name = 11
// let hp: any = 100;
// console.log(typeof hp);
// hp = "study";
// console.log(typeof hp);
// let mp: number = 5
// if (mp >= 5) {
//     console.log("使用必杀技")
// }
// mp = 3
// if (mp >= 5) {
//     console.log("再次使用必杀技")
// } else if (mp >= 3) {
//     console.log("使用烈焰斩")
// } else {
//     console.log("法力不足，使用普通攻击")
// }
// let job: string = '法师'
// switch(job) {
//     case '战士': {
//         console.log('斩击');
//         break;
//     }
//     case '射手': {
//         console.log('弓箭攻击');
//         break;
//     }
//     case '法师': {
//         console.log('火球术');
//         break;
//     }
//     default: {
//         console.log('职业不存在');
//         break;
//     }
// }
let enemy_hp = 20;
let hero_atk = 3;
// ememy_hp = ememy_hp-hero_atk
// console.log(ememy_hp)
// ememy_hp = ememy_hp-hero_atk
// console.log(ememy_hp)
// ememy_hp = ememy_hp-hero_atk
// console.log(ememy_hp)
// ememy_hp = ememy_hp-hero_atk
// console.log(ememy_hp)
// ememy_hp = ememy_hp-hero_atk
// console.log(ememy_hp)
// console.log('开始五连击')
// for (let i: number = 0; i < 5; i++) {
//     enemy_hp = enemy_hp - hero_atk
//     console.log((i+1) + '连击, 敌人血量：' + enemy_hp)
// }
// let i: number = 1
// while (i <= 5) {
//     enemy_hp = enemy_hp - hero_atk
//     console.log((i+1) + '连击, 敌人血量：' + enemy_hp)
//     i++
// }
// let jobs: string[] = ['法师', '战士', '射手', '召唤师', '圣骑士']
// // console.log(jobs.length)
// // console.log(jobs[0])
// // 这种迭代的写法没见过
// for (let job of jobs) {
//     console.log(job)
// }
// let hero = {
//     hp : 20,
//     mp: 50,
//     job: '战士',
//     backpacker: ['草药', '红宝石', '短剑', '皮甲']
// };
// console.log(hero.hp)
// function getJob(): string {
//     return '盗贼';
// }
// console.log(getJob());
function getJobIndex(index) {
    let jobs = ['法师', '战士', '射手', '召唤师', '圣骑士'];
    return jobs[index];
}
console.log(getJobIndex(111));
//# sourceMappingURL=test.js.map