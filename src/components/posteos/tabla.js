import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo({ posts, updatePost, deletePost }) {

  const [state, setState] = React.useState({
    columns: [
      { title: 'ID Post', field: 'id' },
      { title: 'Título', field: 'title' },
    ],
    data: posts
  });

  return (
    <MaterialTable
      title="Editable "
      columns={state.columns}
      data={posts}
      editable={{

        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
           console.log(resolve);
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