import { Table } from "antd"
import { ColumnsType } from "antd/es/table";
// import { Product } from "../../types"

interface Props {
    //data: Product[];
    columns: ColumnsType;
}

const CategoryList = ({ columns} : Props) => {

    return (
        <Table />
    )
}

export default CategoryList