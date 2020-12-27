import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconAkun, IconAkunActive, IconPesanan, IconPesananActive, IconHome, IconHomeActive } from "../../assets";
import { WARNA_UTAMA, WARNA_DISABLE } from "../../utils/constants";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Home") return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label === "Pesanan") return isFocused ? <IconPesananActive /> : <IconPesanan />;
    if (label === "Akun") return isFocused ? <IconAkunActive /> : <IconAkun />;
  }
    return (
        <TouchableOpacity
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.container}
        >
          <Icon />
          <Text style={styles.label(isFocused)}>{label}</Text>
        </TouchableOpacity>
      );
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: (isFocused) => ({
    fontSize: 13,
    marginTop: 8,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
  })
})
