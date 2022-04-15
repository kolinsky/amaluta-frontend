import React from "react";

import "./SideBar.scss";
import SideBarButton from "./SidebarButton";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import NewOrder from "@material-ui/icons/HomeWork";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Shipping from '@mui/icons-material/Sailing';
import ArchiveIcon from '@mui/icons-material/Archive';

const SideBar: React.FC<{}> = () => {
    return(
        <div className = "sidebar">
            <SideBarButton Text="首页" Icon={HomeIcon} />
            <SideBarButton Text="商品" Icon={CategoryIcon} />
            <SideBarButton Text="新订单" Icon={NewOrder} />
            <SideBarButton Text="处理中" Icon={AssignmentIcon} />
            <SideBarButton Text="运输中" Icon={Shipping} />
            <SideBarButton Text="历史数据" Icon={ArchiveIcon} />
        </div>
    );
}

export default SideBar;