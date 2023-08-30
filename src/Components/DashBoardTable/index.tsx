import { DataGrid, GridColDef} from "@mui/x-data-grid";
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa';


interface IProps {
  properties: any[];
  onSelect(target: number, action: string): void;
}

const DashBoardtable = (props: IProps) => {
  const data: any[] = [];


  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      width: 170,
    },
    { field: "total_area", headerName: "Área total", flex: 1 },
    {
      field: "built_area",
      headerName: "Área contruída",
      flex: 1,
    },
    { field: "zip_code", headerName: "CEP", width: 170 },
  
    {
      field: "price",
      headerName: "Preço",
      width: 170,
      
    },
    {
      field: "action",
      headerName: "Ações",
      sortable: false,
      renderCell: (params: any) => (
       <div style={{cursor: 'pointer'}}> 
        <span onClick={()=> {props.onSelect(params.row.id, 'edit')}}> <FaPencilAlt/> </span>
        <span onClick={()=> {props.onSelect(params.row.id, 'delete')}}> <FaTrashAlt/></span>
       </div>
      ),
    },
  ];

  return <div className="wrap-table">
          {props.properties && props.properties?.length > 0 ? (
            <DataGrid
              autoHeight
              getRowId={(row: any) => row.id}
              rows={props.properties}
              columns={columns}
              sx={{background: "#FFF"}}
            />
          ) : (
            <div>
              <h3>Crie um novo briefing para visualizar a listagem.</h3>
            </div>)}
        </div>

} 


export default DashBoardtable