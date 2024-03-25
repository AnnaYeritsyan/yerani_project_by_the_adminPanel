import { Paper } from '@mui/material';

function Item( item: any) {    
    return (
        <Paper sx={{ width: '85%', boxShadow: 'none', ml: {md:'15',xs:'7%'} }}>
            {item.item.image ? (
                <img src={item.item.image} alt={item.item.title} width={'100%'} />
            ) : (
                item.item.url && <video
                autoPlay
                loop
                muted
                height={'250px'}
               width={'100%'}
                        style={{ maxWidth: '100%' }}
              >
                <source
                  src={item.item.url}
                  type="video/mp4"
                />
              </video>
            )}
            <h2>{item.item.title}</h2>
        </Paper>
    );
}

export default Item;
