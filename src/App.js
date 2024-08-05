import {useState} from "react";
const App = () =>{
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleClick = (value) =>{
        setInput((prevInput)=>prevInput+value);
    };

    const handleClear = () =>{
        setInput('');
        setOutput('');
    };

    const handleCalculate = () =>{
        if (input === '' || '+-x/'.includes(input[input.length - 1])) {
            setOutput('Error');
            return;
          }
        try{
            const result = eval(input);
            setOutput(result);
        }catch(error){
            setOutput('Error');
        }
    };

    return(
        <div >
            <input type="text"  value={input} placeholder="Enter expression" readOnly/>
            <div >{output}</div> 
            <div>
                {[7,8,9,'+',4,5,6,'-',1,2,3,'*','C',0,'=','/'].map((item)=>(
                    <button key={item}
                    onClick={()=>{
                        if(item === '='){handleCalculate();}
                        else if(item === 'C'){handleClear();}
                        else{handleClick(item);}
                    }}
                    >{item}</button>
                ))}
            </div>
        </div>
    );
};
export default App;