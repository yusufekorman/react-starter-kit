İçinde Tailwind, Redux, React Icons olan bir React projesidir.    
Ve içinde ek `Component`ler bulunur. Örneğin;
- Tablo (Searchable, Sortable) `tayfunerbilen/react-table`
- Modal
- Buton

## Nasıl Kurulur?      
```
git clone https://github.com/yusufekorman/react-starter-kit
npm i
```
# Tablo Componenti kullanımı
```javascript
<Table 
  searchable={true} 
  head={[
    {name: 'Ad-Soyad', sortable: true},
    {name: 'E-posta'},
    {name: 'Yaş', sortable: true},
    {name: 'İşlemler', width: 200}
  ]}
  body={[
    [
      'Yusuf Emir KORMAN', 
      'yusufekorman@gmail.com', 
      13, 
      <button onClick={() => {
        const tmpUsers = [...users]
		tmpUsers.splice(key, 1)
		setUsers(tmpUsers)}}>
      Sil
      </button>
	],
	[
      'Ahmet Mehmet YILMAZ', 
      'amy@gmail.com', 
      30, 
      <button onClick={() => {
        const tmpUsers = [...users]
		tmpUsers.splice(key, 1)
		setUsers(tmpUsers)}}>
      Sil
      </button>
	]
  ]}
/>
```
