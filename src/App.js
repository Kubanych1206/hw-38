import React, {useState} from 'react'
import './App.css'
import { User } from './components/User'
import { data } from './data'


function App() {
  const [age, setAge] = useState(1)
  const [country, setCountry] = useState()

  const renderCountry = () => {
    switch (country) {
      case 1: 
          let arr3 = data.filter((el)=> {
             return el.age < 18 && el.country === 'Kyrgyz'
          })
          return arr3.map((el, id) => {
            return <User data = {el} key = {id}/>
          })
      case 2:
          let arr4 = data.filter((el) => {
              return el.age < 18 && el.country !== 'Kyrgyz'
          })
          return arr4.map((el, id)=> {
            return <User data = {el} key = {id}/>
          })
          
      default:
          let arr = data.filter((el)=> {
            return el.age < 18
          })
          return arr.map((el, id) => {
            return <User data = {el} key = {id}/>
          })    
    }
       
  }

  const renderUsers = () => {
     switch (age) {
        case 1: 
          return (
            <>
                <div>
                    <button
                       onClick = {() => setCountry(1)}
                       className = 'btn1'
                    >
                      Kyrgyz
                    </button>  
                    <button
                        onClick = {() => setCountry(2)}
                        className = 'btn1'
                    >
                      Foreigner
                    </button> 
                    <div className = 'mom'>{renderCountry()}</div>    
                </div>
            </>
          )
        case 2:
            let arr1 = data.filter((el) => {
              return el.age > 18 && el.age <25
            })
            return arr1.map((el, id)=> {
              return <User data = {el} key = {id}/>
            })
        case 3: 
            let arr2 = data.filter((el) => {
              return el.age > 25
            })    
            return arr2.map((el, id) => {
              return <User data = {el} key = {id}/>
            })
        case 4:
            return data.map((el, id) => {
              return <User data = {el} key = {id}/>
            })    

        default:
          return ''    

     }
  }

  return (
    
     <div className = 'App'>
        <h1>Встречайте наших гостей:</h1>
        <div className = 'btn-group'>
           <button onClick = {() => setAge(1)} className='btn'>
                Меньше: 18
           </button>
           <button onClick = {() => setAge(2)} className = 'btn'>
                от 18 до 24
           </button>
           <button onClick = {() => setAge(3)} className = 'btn'>
                от 24 до 75
           </button>
           <button onClick = {() => setAge(4)} className = 'btn'>
                Все гости
           </button>


        </div>
        <div className = 'container'>{renderUsers()}</div>
        
     </div>
  )
}

export default App