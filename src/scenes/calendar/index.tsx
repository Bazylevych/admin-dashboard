import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { tokens } from "../../theme";
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from "@fullcalendar/core";
import { INITIAL_EVENTS, createEventId } from "../../utils/calendar/eventUtils";
import Header from "../global/Header";
import { DateInput } from "@fullcalendar/core";
import CalendarSidebar from "./CalendarSidebar";

const Calendar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* CALENDAR SIDEBAR */}
        <CalendarSidebar currentEvents={currentEvents} colors={colors} />

        {/* CALENDAR */}
        <Box
          flex="1 1 100%"
          sx={{
            marginLeft: "15px",
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={INITIAL_EVENTS}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
