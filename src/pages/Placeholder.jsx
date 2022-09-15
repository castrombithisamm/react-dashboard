import React, {Component} from 'react';
// import Placedata from '../data/placedata';
import Posts from '../data/posts';

import { GridComponent, ColumnsDirective,  
ColumnDirective, Resize, Sort, ContextMenu, Filter,
Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2/data'

import { ordersData, contextMenuItems, authorGrid, ordersGrid } from '../data/dummy'
import { Header } from '../components'



export class Placeholder extends Component {

            state = {
              posts: []
            }

 

                    gridTemplate(props) {
                      return (<div>
                        <p>Leanne Graham</p>
                    </div>);
                  }
                    componentDidMount() {
                      fetch('https://jsonplaceholder.typicode.com/posts')
                      .then(res => res.json())
                      .then((data) => {
                        // res.words.length;
                        this.setState({ posts: data,  authorGrid})

                      })
                      .catch(console.log)
                    }

                                
              render() {
                return (
                  <div>
                  <Posts posts={this.state.posts} />
                  </div>

                );
              }
            }


  export default Placeholder;


// const Placeholder = () => {
//   const data: DataManager = new DataManager ({
//  url:'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/',
//  adaptor: new ODataV4Adaptor()
//   });

//   return (
//     <div className="m-2 md:m-0 p-2 md:p-6">
//         <Header name="JSON PLACEHOLDER" />
//         <GridComponent className="m-14"
//         id="gridcomp"
//         dataSource={data}
//         allowPaging={true} pageSettings={{ pageSize:10 }}  
//         allowSorting
//         > 
        
        // <ColumnsDirective>
        //         <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
        //         <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
        //         <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        //         <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
        //     </ColumnsDirective>
        //   <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
        // </GridComponent>
//     </div> 
//   )
// }

// export default Placeholder
