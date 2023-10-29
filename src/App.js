import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from './SlenderHead.png';
import SvgIcon from '@mui/material/SvgIcon';
import EmailIcon from '@mui/icons-material/Email';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function App() {
  return (
      <body className={"App"}>
        <div className={"Paper"}>
            <img src={logo} className="logo" alt="logo" />
            <p>欢迎来到翔翔空间</p>
            <Stack className={"stack"} direction="row" spacing={5}>
                <Button className={"btn"} variant="contained" color="secondary" href="https://blog.csdn.net/Slender_MAN233" target={"_blank"}>
                    <HomeIcon fontSize="large"/>
                </Button>
                <Button className={"btn"} variant="contained" color="secondary" href="https://mail.qq.com" target={"_blank"}>
                    <EmailIcon fontSize="large"/>
                </Button>
                <Button className={"btn"} variant="contained" color="secondary" href="https://space.bilibili.com/440309126" target={"_blank"}>
                    <LiveTvIcon fontSize="large"/>
                </Button>
            </Stack>
        </div>
      </body>
  );
}

export default App;
