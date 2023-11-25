import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { AppGlobalState } from '../../App';
import { SelectorHandlerFunction } from '../../types/SelectorHandlerFunction';
import { TimeFrame } from '../../types/TimeFrame';

const StyledAppBar = styled(MuiAppBar)`
  padding: 12px 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export interface AppBarProps extends Pick<AppGlobalState, 'onSelectorChangeHandler'>{
  title: string;
  onSelectorChangeHandler: SelectorHandlerFunction
};

export const AppBar = ({ title, onSelectorChangeHandler }: AppBarProps) => {
  const onSelectorChange = (e: SelectChangeEvent) => {
    const value = e.target.value

    onSelectorChangeHandler(value as TimeFrame)
  }

  return (
    <StyledAppBar>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, alignSelf: 'center' }}
      >
        { title }
      </Typography>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          defaultValue={ 'day' }
          onChange={ onSelectorChange }
          sx={{
            color: 'white',
            border: '1px solid white',
            '&:hover': {
              border: '2px solid white'
            },
            '& svg': {
                color: 'inherit',
            },
          }}
        >
          <MenuItem value={'day'}>Today</MenuItem>
          <MenuItem value={'yesterday'}>Yesterday</MenuItem>
          <MenuItem value={'seven-days'}>Last 7 days</MenuItem>
          <MenuItem value={'month'}>This Month</MenuItem>
        </Select>
    </StyledAppBar>
  );
};
