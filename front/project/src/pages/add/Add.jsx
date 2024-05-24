import React, { useEffect } from 'react'
import { productSchema } from './../../schema/productSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './add.scss'
import { getAllData } from '../../redux/slices/productSlice';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaTrash } from "react-icons/fa";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Add = () => {

  const products = useSelector((state) => state.products.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [])

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(productSchema),
  });

  const createData = async (values) => {
    console.log(values)
    await axios.post("http://localhost:5050/products", values)
    dispatch(getAllData())
  }
  const deleteById = async (id) => {
    await axios.delete(`http://localhost:5050/products/${id}`)
    dispatch(getAllData())
    
  }
  return (
    <section>
      <div className='container'>
        <div className='addPage'>
          <form onSubmit={handleSubmit(createData)}>
            <input type='text' placeholder='Image' {...register('image')} />
            {errors.image?.message && <p style={{ color: "red" }}>{errors.image?.message}</p>}
            <input type='text' placeholder='Title' {...register('title')} />
            {errors.title?.message && <p style={{ color: "red" }}>{errors.title?.message}</p>}

            <input type='text' placeholder='Description' {...register('description')} />
            {errors.description?.message && <p style={{ color: "red" }}>{errors.description?.message}</p>}

            <input type='text' placeholder='Price' {...register('price')} />
            {errors.price?.message && <p style={{ color: "red" }}>{errors.price?.message}</p>}

            <button>Submit</button>


          </form>

          <div className='table'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Image</StyledTableCell>
                    <StyledTableCell align="right">Title</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        <img className='tableImage' src={row.image} />
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.title}</StyledTableCell>
                      <StyledTableCell align="right">{row.description}</StyledTableCell>
                      <StyledTableCell align="right">${row.price}</StyledTableCell>
                      <StyledTableCell align="right"> <FaTrash className='trash' onClick={() => {
                       deleteById(row._id)
                      }} /></StyledTableCell>


                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Add