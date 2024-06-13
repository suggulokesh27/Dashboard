import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react'

import schoolLogo from '../assets/brand/schoolLogo.png'
import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { toggleMenubar, toggleSidebar } from 'src/store/ChangeStateSlice'
import CIcon from '@coreui/icons-react'
import { cilNoteAdd } from '@coreui/icons'
import { Title } from 'chart.js'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.ChangeStateSlice.togglebar)
  const sidebarShow = useSelector((state) => state.ChangeStateSlice.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(toggleSidebar(visible))
      }}
      style={{
        backgroundColor:"#042954",
        // color:"black"
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
          <CImage fluid src={schoolLogo} width="35px" height="35px" />
          <h6 style={{ marginLeft: '10px', marginBottom: '0' }}>Sunshine</h6>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch(toggleMenubar(!unfoldable))
        }
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
