

# **State Management** 
adalah library yang digunakan untuk mengelola state pada suatu aplikasi JavaScript agar lebih mudah di kelolah. 
## **State Management yang sering di gunakan**

- Redux
- Context
## **Redux**
<img src="https://caraguna.com/wp-content/uploads/2022/02/redux.png"/>

adalah State Management yang digunakan utuk maengatur penggunaan state agar lebih mudah di gunakan dengan menggunakan store

## **Mengapa harus menggunakan redux**
Ketika menggunakan React dengan Redux kita tidak perlu lagi memindahkan state dari satu component ke component lain, karena Redux mengubah state menjadi global state dan menempatkannya pada suatu tempat bernama store.



## **Istilah Dasar Pada Redux**
 
 - Action

Sebuah JavaScript Object mewakili apa yang terjadi

 - Reducers

  Function yang menerima object state dan object action, bertugas menentukan bagaimana suatu state diubah. Output reducer adalah state baru

 - Store

 Tempat dimana global state disimpan.   

 

## **Context**
pengertian nya hampir sama namun bedaya lenih simple tanpa melakuakan banyak penginstallan 
seperti redux karana redux merupakan libary dari luar dan context berasal dari react itu sendiri
## **Cara menggunkan Context**
![](Screenshot%20(397).png)
   
1. import react libary
2. eksport createContext


![](Screenshot%20(399).png)

3. import komponen yang di butuhkan

4. definisika provider

5. lalu definisikan value yang di butuhkan chilldren

## **React Testing**
adalah seperangkat helpers yang memungkinkan Anda mengetes komponen pada React tanpa bergantung pada detail implementasinya.
 testing dapat dilakukan dengan menggunakan JEST 
