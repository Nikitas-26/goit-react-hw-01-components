const renderTransaction = ({transctions}) => {
    return (
        <>
        {transctions.map(el=>{
       return <tr key={el.id} >
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
       })}
    </>
)
    }
 
export default renderTransaction;