import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

// 定义按类型搜索表单控件的样式
const formControl =
{
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
};

export default function FilterMoviesCard(props) {

    // 局部数组，包含三种电影类型
    const { data, error, isLoading, isError } = useQuery("genres", getGenres);

    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All"){
      genres.unshift({ id: "0", name: "All" });
    }
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
  
    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };
  
    const handleGenreChange = (e) => {
      handleChange(e, "genre", e.target.value);
    };

    return (
        // 卡片组件
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: "rgb(204, 204, 0)"
            }}
            variant="outlined">

            <CardContent>

                <Typography variant="h5" component="h1">
                    {/* 搜索图标 */}
                    <SearchIcon fontSize="large" />
                    Filter the movies.
                </Typography>
                {/* 允许搜索关键词 */}
                <TextField
                    sx={{ ...formControl }}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    value={props.titleFilter}
                    onChange={handleTextChange}
                />
                {/* 下拉选择器，每个类型是一个MenuItem，由genres数组动态映射 */}
                <FormControl sx={{ ...formControl }}>
                    <InputLabel id="genre-label">Genre</InputLabel>
                    <Select
                        labelId="genre-label"
                        id="genre-select"
                        defaultValue=""
                        value={props.genreFilter}
                        onChange={handleGenreChange}
                    >
                        {/* 动态映射数组 */}
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </CardContent>
            {/* 导入图片 */}
            <CardMedia
                sx={{ height: 300 }}
                image={img}
                title="Filter"
            />

            <CardContent>
                <Typography variant="h5" component="h1">
                    <SearchIcon fontSize="large" />
                    Filter the movies.
                    <br />
                </Typography>
            </CardContent>
        </Card>
    );
}