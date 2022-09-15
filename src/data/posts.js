import { Header } from '../components'

import { GridComponent, ColumnsDirective,  
    ColumnDirective, Resize, Sort, ContextMenu, Filter,
    Page, ExcelExport, PdfExport, Edit, Inject, } from '@syncfusion/ej2-react-grids'
    
import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { authorGrid, contextMenuItems } from '../data/dummy'
import { Placeholder } from '../pages/Placeholder';
import {template, gridTemplate} from '../pages/Placeholder'



    const Posts = ({ posts }) => {

      return (
        <div className="m-2 md:m-0 p-2 md:p-6">
        <Header name="JSON PLACEHOLDER" />  
        <GridComponent className="m-14 bg-black"
         id="gridcomp" 
         dataSource={posts} 
            allowPaging={true} pageSettings={{ pageSize:10 }}  
            allowSorting
            contextMenuItems={contextMenuItems}
                >         
              {/* <center><h1>Post List</h1></center> */}


              <ColumnsDirective className=''>

              <ColorPickerComponent></ColorPickerComponent>
                      <ColumnDirective field='title' headerText='Title' width='120' textAlign='Left' ></ColumnDirective>
                      <ColumnDirective field='body' headerText='Description' width='150' textAlign='Right'/>
                      <ColumnDirective field='body.length'  headerText='Words' width='150' textAlign='Right'></ColumnDirective>
                      <ColumnDirective  headerText='Author' template='Graham Leanne' width='150'textAlign='Right' ></ColumnDirective>
                      
                  </ColumnsDirective>
                
          <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
        </GridComponent>
        </div>
      )
    };

    export default Posts