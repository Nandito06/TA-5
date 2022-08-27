

# **REACT JS LANJUTAN** 
## **Hooks**
hooks digunakan untuk memudahkan penggunaaan functional component agar bisa menggunakan nested dan lifecycle lainnya

## **Hooks yang sering digunakan**

- use state
- use effect

## **Perbedaan Class Component, Functional Component**
Kedua menghasilkan cara yang sama namun class menggunakan state, dan functional component menggunkan state hooks

![](Screenshot%20(386).png)

## **Kelebihan Penggunaan hooks**
 
 Bisa dilihat dari code sebelumnya, bahwa penggunaan hooks terlihat lebih simple,clean,dan mudah di mengerti dalam penulisanya 

 

## **apa itu useState**
useState adalah state yang berbeda dari state pada  class component namun pengertiannya sama  
![](Screenshot%20(387).png)
## **cara update useState menggunakan onChange**
![](Screenshot%20(388).png)
jadi dalam mengupdate data hanya perlu menggubah menggunakan setter nya yaitu  'setName'



## **useHooks**

merupaka Hooks yang bisa di gunakan untuk menggunakan lifecycle pada function component dengan mudah

## **LifeCycle**
lifeCycle adalah alur dari dari proses hooks pada functional component 
## **Penggunaan useEffect**
![](Screenshot%20(389).png)

penggunaan useEffect di gunakan untuk menambahkan perubahan pada state, seperti pada gambar di atas

# **React Router**
adalah libary pada react yang berguna untuk membuat perutean pada aplikasi atau web


## **Ada 2 Jenis router**
- hashRouter
- Browser Router
yang paling sering digunakan adalah browser router untuk menggunakan data dinamis dengan server Backend

## **Tag yang sering di gunakan React Router**

- Link
- Routes
- Route

ke 3 tag ini merupakan satu Kesatuan yang tak bisa di pisahkan, di dalam Link Terdapat atribut yang bernama "to ", dan dalam Route terdapat  juga atribut yaitu "path" 

contoh Pengunaan Link:
> ``` <Link to="/alamatLink"></Link>```

Contoh Penggunaan Route:
> ``` <Routes><Route path="/alamat link" element={<AlamatLink/>} /></Routes>```
## **Penggunaan Routes Dibagi menjadi 2**
 
 - Dinamic
 
 - Nested
 

 

