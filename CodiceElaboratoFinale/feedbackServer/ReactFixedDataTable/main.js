/*/
const React = require ('react');
const ReactDOM = require ('react-dom');
const {Table, Column, Cell} = require ('fixed-data-table');
/*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
/**/
const rows = [
  {"id":1,"name":"William","email":"welliott0@wisc.edu","country":"China","subject":"E' una bella storia"},
  {"id":2,"name":"Carl","email":"cross1@mlb.com","country":"Argentina","subject":"E' una bella storia americana"},
  {"id":3,"name":"Carl","email":"cross1@mlb.com","country":"Argentina","subject":"E' una bella storia americana"},
  {"id":4,"name":"Jeremy","email":"jscott2@cbsnews.com","country":"Italy","subject":"E' una storia cialtrona"},
  {"id":5,"name":"Carl","email":"cross1@mlb.com","country":"Argentina","subject":"E' una bella storia americana"},
  {"id":6,"name":"Jeremy","email":"jscott2@cbsnews.com","country":"Italy","subject":"E' una storia cialtrona"},
  {"id":7,"name":"Jeremy","email":"jscott2@cbsnews.com","country":"Italy","subject":"E' una storia cialtrona"},
  {"id":8,"name":"Carl","email":"cross1@mlb.com","country":"Argentina","subject":"E' una bella storia americana"},
  {"id":9,"name":"Jeremy","email":"jscott2@cbsnews.com","country":"Italy","subject":"E' una storia cialtrona"},
  {"id":10,"name":"William","email":"welliott0@wisc.edu","country":"China","subject":"E' una bella storia"},
  {"id":11,"name":"Carl","email":"cross1@mlb.com","country":"Argentina","subject":"E' una bella storia americana"},
  {"id":12,"name":"Carl","email":"cross1@mlb.com","country":"Argentina","subject":"E' una bella storia americana"},
  {"id":13,"name":"Jeremy","email":"jscott2@cbsnews.com","country":"Italy","subject":"E' una storia cialtrona"},
  {"id":14,"name":"Carl","email":"cross1@mlb.com","country":"Argentina","subject":"E' una bella storia americana"},
  {"id":15,"name":"Jeremy","email":"jscott2@cbsnews.com","country":"Italy","subject":"E' una storia cialtrona"},
  {"id":16,"name":"Jeremy","email":"jscott2@cbsnews.com","country":"Italy","subject":"E' una storia cialtrona"}
// more data
];
 
ReactDOM.render(
    <Table
      height={rows.length * 20}
      width={1150}
      rowsCount={rows.length}
      rowHeight={30}
      headerHeight={30}
      rowGetter={function(rowIndex) {return rows[rowIndex]; }}>
 
      <Column dataKey="id" width={50} label="Id" />
      <Column dataKey="name" width={200} label="Name" />
      <Column  dataKey="email" width={400} label="e-mail" />
      <Column  dataKey="country" width={300} label="Country" />
      <Column  dataKey="subject" width={300} label="Subject" />
 
    </Table>,
    document.getElementById('feedbacks')
);