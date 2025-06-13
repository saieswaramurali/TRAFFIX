import { styled } from '@mui/material/styles';
import {
  Drawer, Box, Divider, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Typography
} from '@mui/material';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import TimelineIcon from '@mui/icons-material/Timeline';
import ReportIcon from '@mui/icons-material/Report';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WarningIcon from '@mui/icons-material/Warning';

const drawerWidth = 260;

const StyledDrawer = styled(Drawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#F9FAFB',
    borderRight: '1px solid #E5E7EB',
  },
}));

export default function SideMenu() {
  const menuSections = [
    {
      label: "Core Features",
      items: [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Live Map', icon: <MapIcon />}, 
        { text: 'Incidents', icon: <TimelineIcon /> },
        { text: 'Reports', icon: <ReportIcon /> },
        { text: 'CCTV Feed', icon: <CameraAltIcon /> },
      ]
    },
    {
      label: "Analytics",
      items: [
        { text: 'Traffic Analytics', icon: <AnalyticsIcon /> },
        { text: 'Traffic Trends', icon: <QueryStatsIcon /> },
      ]
    },
    {
      label: "Admin Tools",
      items: [
        { text: 'Settings', icon: <SettingsIcon /> },
        { text: 'Admin Panel', icon: <AdminPanelSettingsIcon /> },
      ]
    },
    {
      label: "Emergency",
      items: [
        { text: 'Emergency Panel', icon: <WarningIcon /> },
      ]
    }
  ];

  return (
    <StyledDrawer variant="permanent">
      {/* Logo and Title */}
      <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/assets/logo.png"
          alt="TRAFFIX Logo"
          style={{ width: '35px', height: '35px' }}
        />
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', ml: 0.5 }}>
          TRAFFIX
        </Typography>
      </Box>

      <Divider sx={{ borderColor: '#E5E7EB' }} />

      {/* Menu Sections */}
      {menuSections.map((section, idx) => (
        <Box key={idx} sx={{ mt: 1, px: 1.5 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700, // Increased font weight for better readability
              color: '#0288d1', // Highlighted color for emphasis
              mb: 0.5, // Adjusted spacing
              textTransform: 'uppercase',
              fontSize: '1rem', // Slightly larger font size
              backgroundColor: '#E3F2FD', // Subtle background color
              borderRadius: 1, // Rounded corners for the background
              padding: '4px 8px', // Padding for better visibility
            }}
          >
            {section.label}
          </Typography>
          <List>
            {section.items.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    mb: 0.4, // Adjusted spacing
                    py: 0.6, // Balanced padding
                    '&:hover': {
                      backgroundColor: item.isEmergency ? '#FEE2E2' : '#E0F2FE',
                    },
                    color: '#1E293B',
                  }}
                >
                  <ListItemIcon sx={{ color: item.isEmergency ? '#DC2626' : '#0EA5E9' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}

      <Divider sx={{ mt: 2, borderColor: '#E5E7EB' }} />

      {/* Login Button */}
      <Box sx={{ p: 1.5 }}>
        <Box
          sx={{
            mt: 1.5,
            p: 0.8, // Balanced padding
            textAlign: 'center',
            backgroundColor: '#10B981',
            color: 'white',
            borderRadius: 2,
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: 1,
            '&:hover': {
              backgroundColor: '#059669',
            },
          }}
        >
          Login
        </Box>
      </Box>
    </StyledDrawer>
  );
}
