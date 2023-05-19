import { DateInput, EventApi, formatDate } from "@fullcalendar/core";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { FC } from "react";
import { IColors } from "../../models/theme";

interface CalendarSidebarProps {
  currentEvents: EventApi[];
  colors: IColors;
}

const CalendarSidebar: FC<CalendarSidebarProps> = ({
  currentEvents,
  colors,
}: CalendarSidebarProps) => {
  return (
    <Box
      flex="1 1 20%"
      sx={{
        backgroundColor: `${colors.primary[400]}`,
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h5">Events</Typography>
      <List>
        {currentEvents.map((event: EventApi) => (
          <ListItem
            key={event.id}
            sx={{
              backgroundColor: colors.greenAccent[500],
              margin: "10px 0",
              borderRadius: "2px",
            }}
          >
            <ListItemText
              primary={event.title}
              secondary={
                <Typography>
                  {formatDate(event.start as DateInput, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CalendarSidebar;
