import React, { useState } from 'react';
import { Drawer, Button, Carousel, Card, Icon, Avatar, message } from 'antd';
import './mainLay.scss';
const { Meta } = Card;
const MainLay = ({children}) => {
  
  const [mainLayState, setMainLayState] = useState( {
    visible: false,
  } );

  const showDrawer = () => {
    setMainLayState( {visible: true} );
  };
  
  const onClose = () => {
    setMainLayState( {visible: false} );
  };

  const info = () => {
    message.info('Item se ha guardado');
  };
  
  return(
    <div className="layout-whole">
      <div className="layout-side">
        <ul className="side-menu">
          { [0,1,2,3].map((key) => <li> 
              <Button type="link" style={{width:'100%'}} onClick={showDrawer} ghost>
                Item {key+1}
              </Button>
            </li>
          ) }
        </ul>
        <Drawer
          title="Escoge tu sección"
          placement="left"
          closable={true}
          onClose={onClose}
          visible={mainLayState.visible}
        >
          <ul>
            { ['Tecnología','Hogar','Videojuegos','Deportes','Niños'].map((key) => <li style={{margin:'10px 0'}}> {key} </li>) }
          </ul>
        </Drawer>
      </div>

      <div className="layout-main">
        <p>
          
        </p>
        <div className="carrousel-holder">
          <Carousel dotPosition="bottom" style={{maxWidth:'780px', height:'260px', overflow:'hidden' }} autoplay>
            <div>
              <div style={{color:"#eee", fontSize:'20px' ,backgroundImage:`url(${'https://realplaza.pe/uploads/promociones/imagenes-promociones/moda-mixta.jpg'})`, maxWidth:'100%'}}> <b>Ven</b> </div>
            </div>
            <div>
              <div style={{color:"#eee", fontSize:'20px' ,backgroundImage:`url(${'https://realplaza.pe/assets/assets_RP/desktop/foto_promociones.jpg'})`, maxWidth:'100%'}}> <b>Experimenta</b> </div>
            </div>
            <div>
              <div style={{color:"#eee", fontSize:'20px' ,backgroundImage:`url(${'https://realplaza.pe/uploads/tendencias/entretenimiento/2020/tecnologia-3.jpg'})`, maxWidth:'100%'}}> <b>Conoce</b> </div>
            </div>
            <div>
              <div style={{color:"#eee", fontSize:'20px' ,backgroundImage:`url(${'https://realplaza.pe/uploads/promociones/imagenes-promociones/librerias-y-utiles.jpg'})`, maxWidth:'100%'}}> <b>Sé Feliz</b> </div>
            </div>
          </Carousel>
          <div className="carrousel-side-card">
          <Card
            style={{ width: 200, margin:'0 auto', cursor:'pointer', }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Osos OA.!"
              description="Directamente desde el Circo de Belarus"
            />
          </Card>
          </div>
          <div className="carrousel-side-card">
            <Card
              style={{ width: 250, margin:'0 auto', cursor:'pointer', }}
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="plus" key="plus" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png" />}
                title="Doge"
                description="The first rule to gun safety, is to have fun"
              />
            </Card>
          </div>
        </div>
        <h2 style={{color:'#333', fontSize:20}}> Take a look at our new lineup!</h2>
        <div className="layout-products">
          {
            [0,1,2,3,4,5, 6, 7, 8, 9].map((key)=>
              <Card
                hoverable
                onClick={info}
                style={{ width: 240, margin:15 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>,
            )
          }
        </div>
      </div>
      <div className="layout-side">
      </div>
    </div>
  )
}

export default MainLay;