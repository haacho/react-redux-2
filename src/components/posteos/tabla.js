import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo({posts}) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID Post', field: 'id' },
      { title: 'Título', field: 'title' },
    ],
    data: posts
  });
  
  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={posts}
      editable={{
     
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}