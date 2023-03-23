import "./Header.css";
import logo from '../../images/logo/logo.png';
import logo2x from '../../images/logo/logo2x.png'
import logo3x from '../../images/logo/logo3x.png'


export const Header = () => {
  

    return (
        <>
            <header className="header" >
                <div className=" container  header-area">
                    <div className="logo-area">
                        <a href="/SAP_test" lang="en">
                         <img  src={logo}
                            srcSet={`${logo2x} 2x, ${logo3x} 3x`}
                            />

                            
                        </a>
                    </div>
                    <div  className="btn-area">
                        <button type="button" className="main-btn"> Users</button>
                        <button type="button" className="main-btn"> Sing up</button>

                    </div>
                              
                </div>
                
                            

            </header>
        </>
    )
    
}