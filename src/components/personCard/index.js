import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // 导入 RouterLink 组件
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function PersonCard({ person }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="340"
        image={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {person.name}
        </Typography>
        {/* 渲染电影链接 */}
        {person.known_for && person.known_for.map((movie) => (
          <Typography key={movie.id} variant="body2">
            {/* 使用 RouterLink 作为 Link 组件的 'component' 属性以提供路由导航 */}
            <Link component={RouterLink} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
