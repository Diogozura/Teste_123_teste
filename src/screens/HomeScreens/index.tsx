
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { BlocCategorais, Card, Categorias, FullCards } from '../../components/Cards'
import { cmsService } from '../../infra/cms/cmsService'



export default function Home({ data }: {data : any} ) {
  const products = data.products.data
  const category = data.categories.data

    // console.log(data.products.data)
    console.log('categorias', category)
   
   
  
  return (
    <>
      <h1>Hello my friend amigo do povo</h1>
      <BlocCategorais>
        <h2>Categorias </h2>
        {category.map((cate) => (
          <Categorias key={cate.id}>{ cate.name}</Categorias>
        ))}
      </BlocCategorais>
      <br/>
      
      <h2>Produtos </h2>
      <FullCards className='fullCards'>{products.map((id: { id: Key | null | undefined; quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => (
          <Card key={id.id} className='card'>
              <p>Disponíveis {id.quantity}</p>
             
            <h3>Name: {id.name }</h3>
            <p>R${id.price}</p>
              <br />
              
            
        </Card>
        
      )) }</FullCards>
      <pre>{JSON.stringify(data , null , 4) }</pre>
    </>
  )
}



export async function getStaticProps() {
    
  const contentQuery = `
  query{
    categories{
      data{
        name
        id
      }
    }
      
    products {
      data {
        id
        image{
          original
          thumbnail
          id
          __typename
        }
        name
        categories{
          name
  }
        shop{
  name
        }
        
        price
        quantity
      }
      paginatorInfo{
        currentPage
        count
  }
    }
   }
  `

  const { data } = await cmsService({
      query: contentQuery
  })

 console.log("Daduss categ ", data.categories)

  return {
      props: {
          data
    }, // will be passed to the page component as props
    revalidate: 60,
    }
}