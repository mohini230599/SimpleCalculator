import React from "react";
import './App.css';
import { display,clear,solve } from "./Calculator";
export default function App() {

  return (
    <div className="App App-header">
      <h1>Calculator App</h1>
      <div className="Container Cal-header">
        <table>
          <tbody>
          <tr>
            <td colSpan="3">
              <input type="text" id="result" readOnly/>
            </td>
            <td>
            <input type="button" className="btnStyle clearStyle" class="clear" value="clear" onClick={()=>clear()}/>
            </td>
          </tr>
          <tr>
            <td>
            <input type="button" className="btnStyle"  value="1" onClick={()=>display('1')}/>
            </td>
            <td>
            <input type="button" className="btnStyle"  value="2" onClick={()=>display('2')}/>
            </td>
            <td>
            <input type="button" className="btnStyle"  value="3" onClick={()=>display('3')}/>
            </td>
            <td>
            <input type="button" className="btnStyle opStyle"  value="-" onClick={()=>display('-')}/>
            </td>
          </tr>
          <tr>
            <td>
            <input type="button" className="btnStyle"  value="4" onClick={()=>display('4')}/>
            </td>
            <td>
            <input type="button" className="btnStyle"  value="5" onClick={()=>display('5')}/>
            </td>
            <td>
            <input type="button"  className="btnStyle" value="6" onClick={()=>display('6')}/>
            </td>
            <td>
            <input type="button" className="btnStyle opStyle" value="*" onClick={()=>display('*')}/>
            </td>
          </tr>
          <tr>
            <td>
            <input type="button" className="btnStyle" value="7" onClick={()=>display('7')}/>
            </td>
            <td>
            <input type="button" className="btnStyle" value="8" onClick={()=>display('8')}/>
            </td>
            <td>
            <input type="button" className="btnStyle" value="9" onClick={()=>display('9')}/>
            </td>
            <td>
            <input type="button" className="btnStyle opStyle" value="/" onClick={()=>display('/')}/>
            </td>
          </tr>
          <tr>
            <td>
            <input type="button"className="btnStyle"  value="." onClick={()=>display('.')}/>
            </td>
            <td>
            <input type="button" className="btnStyle" value="0" onClick={()=>display('0')}/>
            </td>
            <td>
            <input type="button" className="btnStyle solvestle" value="=" onClick={()=>solve()}/>
            </td>
            <td>
            <input type="button" className="btnStyle opStyle" value="+" onClick={()=>display('+')}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>           
    </div>
  );
}
