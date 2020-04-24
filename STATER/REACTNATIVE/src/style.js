improt { StyleSheet } from 'react-native';

export const gs = StyleSheet.create({
  sessionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8
  },
  sessionTitle: {
    fontWeight: "700",
    fontSize: 15
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center"
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  }
})