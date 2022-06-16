import './App.css';
import {useSelector, useDispatch} from 'react-redux';
function App() {

  const totalAmount = useSelector((state) => state.transactionReducer.totalAmount)
  const userName = useSelector((state) => state.transactionReducer.userName)

  const dispatch = useDispatch();


  const withdrawLargeAmount = () =>{
    if(totalAmount>0){
    dispatch({
      type:'10000',
    })
  }else{
    alert('Cannot withdraw further')
  }
  };

  const withdrawSmallAmount = () =>{
    if(totalAmount>0){
    dispatch({
      type:'5000',
    })
    }else{
      alert('Cannot withdraw further')
    }
  };

  const emptyAccount = () => {
    dispatch({
      type:'empty',
    })
  }


  return (
    <div className="App">
        <p className="App__username">Hello, {userName}! </p>
        <div className="App__amount">
          <h3>{`$ ${totalAmount}`}</h3>
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={withdrawLargeAmount}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={withdrawSmallAmount}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" onClick={emptyAccount}>Give away all your cash to charity</p>
    </div>
  );
}

export default App;
