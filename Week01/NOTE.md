学习笔记
1. Array时间复杂度
    1. prepend  O(1)
    2. append O(1)
    3. lookup O(1)
    4. insert O(n)
    5. delete O(n)
2. 一维数据结构要加速，经常采用的方式是升维


1. --global 作用域是当前用户，--system 作用域是所有用户，优先级 git config 大于 git config --global 大于 git config --system。
2. --local 
3. 查看用户名和密码

git config --global --list

2. 步骤：
    1. mkdir 文件夹名
    2. Git init
3. 删除光标右侧 fn + delete

去行头行尾 command + left/right

删除整个单词 option + delete

选取整行 shift + command + left/right

有错误时 option + return 告诉你该怎么修复
4. 注意事项
    1. 确认边界条件
    2. 想所有的解决办法，比较时间复杂度和空间复杂度，找出最优解
    3. 写
    4. 测试
5. 时间复杂度
    1. 所有排序的最优解 nlogn
    2. O(n): 每个节点访问一次且仅访问一次，线性于二叉树的节点总数

    3. 二分查找 logn

二分查找每次折半进行查找，1/2 * x = 1  =>  x = logn （底数为2）
6. 空间复杂度
    1. 数组的长度
        1. 一维数组：O(n)
        2. 二维数组：O(n ^ 2)
    2. 递归的深度
    3. 以上俩都有，则取最大值
7. 栈：最近相关性
    1. 洋葱 —— 从外层向内，两头开始是一对（有效的括号）
    2. 先来后到 —— 队列
8. 只用栈来实现队列，或者只用队列来实现栈，用两个栈或两个队列
9. 滑动窗口 —— 队列