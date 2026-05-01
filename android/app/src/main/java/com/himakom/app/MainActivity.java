package com.himakom.app;

import android.os.Bundle;
import android.webkit.WebSettings;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Baris ini WAJIB ada agar Supabase bisa jalan di aplikasi HP (WebView)
        WebSettings settings = this.bridge.getWebView().getSettings();
        settings.setDomStorageEnabled(true);
        settings.setJavaScriptEnabled(true);
    }
}
