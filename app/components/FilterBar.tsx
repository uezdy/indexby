'use client'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import {ortodoxCrossIcon} from "./icons";
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
import Switch from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";
import {css, styled} from "@mui/system";

export default function FilterBar({type, church, callBack, noMK}: any) {
    const [currentType, setCurrentType] = type;
    const [currentChurch, setCurrentChurch, hitsPrikh] = church;
    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setCurrentType(newAlignment);
        callBack && callBack();
    };

    return <FilterBarWrapper>
        <div className="filter-bar-main-wrapper">
            <ToggleButtonGroup
                size="small"
                color="primary"
                value={currentType}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton size="small" value="ch">Приходы</ToggleButton>
                <ToggleButton size="small" value="np">Деревни</ToggleButton>
            </ToggleButtonGroup>
            {
                currentType === 'np' ? <>
                    <Select placeholder="Церкви"
                            value={currentChurch}
                            startDecorator={<span dangerouslySetInnerHTML={{__html: ortodoxCrossIcon}} />}
                            onChange={(event: React.SyntheticEvent | null, newValue: string | null) => {
                                setCurrentChurch(newValue);
                                callBack && callBack();
                            }}
                            {...(currentChurch && {
                                // display the button and remove select indicator
                                // when user has selected a value
                                endDecorator: (
                                    <IconButton
                                        size="sm"
                                        variant="plain"
                                        color="neutral"
                                        onMouseDown={(event) => {
                                            // don't open the popup when clicking on this button
                                            event.stopPropagation();
                                        }}
                                        onClick={() => {
                                            setCurrentChurch('');
                                            callBack && callBack();
                                        }}
                                    >
                                        <CloseRounded />
                                    </IconButton>
                                ),
                                indicator: null,
                            })}
                    >
                        {
                            hitsPrikh.sort((a: any, b: any) => {
                                var textA = a.short.toUpperCase();
                                var textB = b.short.toUpperCase();
                                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                            }).map((hit: any) => {
                                return <Option key={hit.short} value={hit.short}>{hit.short}</Option>
                            })
                        }
                    </Select>


                </> : <>
                    <Typography component="label" startDecorator={
                        <Switch sx={{ ml: 1, "--Switch-trackHeight": "8px" }}
                                className="form-check-input" role="switch" id="flexSwitchCheckDefault"
                                onChange={(e: any) => {
                                    noMK(e.target.checked);
                                }}
                        />
                    }>МК не сохранились</Typography>
                </>
            }

        </div>
    </FilterBarWrapper>
};

const FilterBarWrapper = styled('div')(
    ({theme}) => css`
      & .filter-bar-main-wrapper {
        display: flex;

        .login-google-button {
          margin: 30px 20px;
        }
        .book-title,
        .book-description {
          font-family: 'Monomakh Unicode';
          margin: auto;
        }
        .book-title {
          font-size: 27pt;
        }
        .book-description {
          margin: 20vh 4vw;
        }
        .link-to {
          margin: 10px 0;
        }
      }

    `,
);

