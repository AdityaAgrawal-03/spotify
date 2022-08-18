import {
  List,
  ListItem,
  ListIcon,
  LinkOverlay,
  Box,
  Divider,
  Center,
  LinkBox,
} from "@chakra-ui/layout";
import {
  MdSearch,
  MdHome,
  MdPlaylistAdd,
  MdLibraryMusic,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";
import NextLink from "next/link";

const navMenu = [
  {
    label: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    label: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    label: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    label: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    label: "Liked Songs",
    icon: MdFavorite,
    route: "/liked",
  },
];

const playlists = new Array(50).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      paddingX="10px"
      bg="black"
      color="gray"
    >
      <Box paddingY="10px" height="100%">
        <Box width="120px" paddingX="20px" marginBottom="20px">
          <NextImage src="/trax.svg" width={120} height={60} priority />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => {
              return (
                <ListItem key={menu.label} fontSize="16px" paddingX="10px">
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          marginRight="20px"
                          color="white"
                        />
                        {menu.label}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box>
          <List spacing={2}>
            {musicMenu.map((menu) => {
              return (
                <ListItem key={menu.label} fontSize="16px" paddingX="10px">
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          marginRight="20px"
                          color="white"
                        />
                        {menu.label}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Divider marginY="15px" />
        <Box height="60%" overflowY="auto" paddingY="15px">
          <List spacing={2}>
            {playlists.map((item) => {
              return (
                <ListItem key={item} paddingX="10px">
                  <LinkBox>
                    <NextLink href="/" passHref>
                      <LinkOverlay>{item}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
