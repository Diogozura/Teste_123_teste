
import Image from 'next/image'
import { loadDadus } from '../../../pages/api/graphql'
import { Card, FullCards } from '../../components/Cards'

export default function Home({ dados }) {
    const products = dados.products.data
    // console.log(dados.products.data)
    // products.map((p) => {
    //     const imgP = p.image.original.substr(56)
    //     console.log(imgP)
    // })
    // const imgProducts = products.image.original.substr(56)
  
  return (
    <>
      <h1>Hello my friend amigo do povo</h1>
      <FullCards className='fullCards'>{products.map((id) => (
          <Card key={id.id} className='card'>
              <p>Disponíveis {id.quantity}</p>
              {/* <Image
                  loader={myLoader}
                  src="me.png"
                  width={500}
                  height={500}
                  alt={id.name}
              /> */}
            <h3>Name: {id.name }</h3>
            <p>R${id.price}</p>
              <br />
              
            
        </Card>
        
      )) }</FullCards>
      <pre>{JSON.stringify(dados , null , 4) }</pre>
    </>
  )
}

export async function getStaticProps() {
  const dados = await loadDadus()
  
  return {
    props: {
      dados
    }
  }
}

