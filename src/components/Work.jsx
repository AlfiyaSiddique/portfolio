import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Experience } from "../data/work.js"; // Ensure the correct import path

const Work = () => {
  return (
    <Timeline position="alternate">
      {Experience.map((job, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {job.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '50px' }}/>
            <TimelineDot>
              <img
                src={job.logo}
                alt={job.company}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  margin: '0 auto',
                  backgroundColor: 'secondary.main',
                  border: '2px solid',
                  borderColor: "secondary.main"
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {job.company}
            </Typography>
            <Typography>{job.role}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Work;
