学习笔记

### 时间复杂度

#### 链表时间复杂度

#### 数组时间复杂度

- prepend  O(1)
- append O(1)
- lookup O(1)
- insert O(n)
- delete O(n)

### 注意

一维数据结构要加速，经常采用的方式是升维

### git 使用

- --global 作用域是当前用户，--system 作用域是所有用户，优先级 git config 大于 git config --global 大于 git config   --syste  --local 
- 查看用户名和码
  git config --global --list
- 步骤：
  - mkdir 文件夹名
  - Git init
  - 删除光标右侧 fn + delete
  - 去行头行尾 command + left/right
  - 删除整个单词 option + delete
  - 选取整行 shift + command + left/right
  - 有错误时 option + return 告诉你该怎么修复

### 注意事项

#####  确认边界条件

#####  想所有的解决办法，比较时间复杂度和空间复杂度，找出最优解

#####  写

#####  测试

#####  时间复杂度

- 所有排序的最优解 nlogn

- O(n): 每个节点访问一次且仅访问一次，线性于二叉树的节点总数

- 二分查找 logn：二分查找每次折半进行查找，1/2 * x = 1  =>  x = logn （底数为2）

##### 空间复杂度

- 数组的长度
  - 一维数组：O(n)
  - 二维数组：O(n ^ 2)

- 递归的深度
  - 以上俩都有，则取最大值

#####  栈：最近相关性

- 先来后到 —— 队列

- 只用栈来实现队列，或者只用队列来实现栈，用两个栈或两个队列

- 滑动窗口 —— 队列

