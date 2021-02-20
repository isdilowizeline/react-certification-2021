export const getVideoItems = (items) =>
    items.filter(({id}) => {
        if (id.videoId) {
            return true;
        }

        return false;
    });
