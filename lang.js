const I18N_DATA = {
    // 기본 언어: 영어 (English)
    en: {
        title: "Ollama Setup Guide",
        subtitle: "Please install Ollama to enable AI features.",
        
        // Windows Section
        win_tab: "Windows",
        win_step1_title: "1. Download Installer",
        win_step1_desc: "Download the installer for Windows from the official website.",
        win_btn: "Download for Windows",
        win_step2_title: "2. Install",
        win_step2_desc: "Run the <code>OllamaSetup.exe</code> file and click [Install].",
        win_step2_note: "✅ Once installed, you will see the Alpaca icon (🦙) in the taskbar tray.",
        win_step3_title: "3. Verify Installation",
        win_step3_desc: "Open Command Prompt (Win + R, type <code>cmd</code>) and run the command below:",

        // macOS Section
        mac_tab: "macOS",
        mac_step1_title: "1. Download",
        mac_step1_desc: "Requires macOS 11 Big Sur or later.",
        mac_btn: "Download for macOS",
        mac_step2_title: "2. Install Application",
        mac_step2_desc: "Unzip the file and move the <strong>Ollama</strong> app to the <code>Applications</code> folder.",
        mac_step3_title: "3. Run & Setup",
        mac_step3_desc: "Double-click to run. You should see the Alpaca icon (🦙) in the menu bar.",
        mac_step3_note: "💡 If prompted to install command line tools, click 'Install'.",

        // Ubuntu Section
        linux_tab: "Ubuntu (Linux)",
        linux_step1_title: "1. Install via Terminal",
        linux_step1_desc: "Open your terminal and run the following command:",
        linux_step1_note: "⚠️ AMD graphics cards may require additional driver installation.",
        linux_step2_title: "2. Check Service Status",
        linux_step2_desc: "Ensure Ollama is running in the background.",

        // Common Section
        final_step_title: "🎉 Final Step: Pull AI Model",
        final_step_desc: "After installation, you must download the AI model. Run this in your terminal:",
        final_step_note: "💡 If your app requires a specific model (e.g., mistral), replace 'llama3.2' with that name.",
        
        // UI Elements
        copy: "Copy",
        copied: "Copied!",
        footer: "&copy; 2025 Powered by Ollama."
    },

    // 한국어 (Korean)
    ko: {
        title: "Ollama 설치 가이드",
        subtitle: "앱 사용을 위해 먼저 Ollama를 설치해주세요.",
        
        // Windows Section
        win_tab: "Windows",
        win_step1_title: "1. 설치 파일 다운로드",
        win_step1_desc: "공식 웹사이트에서 Windows용 설치 프로그램을 다운로드합니다.",
        win_btn: "Windows용 다운로드",
        win_step2_title: "2. 설치 진행",
        win_step2_desc: "다운로드한 <code>OllamaSetup.exe</code> 파일을 실행하고 [Install]을 클릭합니다.",
        win_step2_note: "✅ 설치가 완료되면 작업 표시줄 트레이 아이콘에 알파카(🦙)가 나타납니다.",
        win_step3_title: "3. 설치 확인",
        win_step3_desc: "<code>Win + R</code>을 누르고 <code>cmd</code>를 입력해 터미널을 열고 아래 명령어를 입력하세요.",

        // macOS Section
        mac_tab: "macOS",
        mac_step1_title: "1. 다운로드",
        mac_step1_desc: "macOS 11 Big Sur 이상이 필요합니다.",
        mac_btn: "macOS용 다운로드",
        mac_step2_title: "2. 애플리케이션 설치",
        mac_step2_desc: "압축을 풀고 <strong>Ollama</strong> 앱을 <code>응용 프로그램(Applications)</code> 폴더로 이동시킵니다.",
        mac_step3_title: "3. 실행 및 설정",
        mac_step3_desc: "Ollama 앱을 실행하세요. 메뉴바에 알파카 아이콘(🦙)이 생기면 정상 작동 중입니다.",
        mac_step3_note: "💡 터미널 도구 설치 팝업이 뜨면 'Install'을 눌러주세요.",

        // Ubuntu Section
        linux_tab: "Ubuntu (Linux)",
        linux_step1_title: "1. 터미널 명령어로 설치",
        linux_step1_desc: "터미널을 열고 아래 명령어를 입력하면 자동으로 설치됩니다.",
        linux_step1_note: "⚠️ AMD 그래픽 카드는 추가 드라이버 설정이 필요할 수 있습니다.",
        linux_step2_title: "2. 서비스 상태 확인",
        linux_step2_desc: "설치 후 Ollama가 백그라운드에서 실행 중인지 확인합니다.",

        // Common Section
        final_step_title: "🎉 마지막 단계: AI 모델 다운로드",
        final_step_desc: "설치 완료 후, 사용할 AI 모델을 받아야 합니다. 터미널에 아래를 입력하세요:",
        final_step_note: "💡 앱에서 특정 모델(예: mistral)을 요구한다면 해당 이름을 입력해야 합니다.",
        
        // UI Elements
        copy: "복사",
        copied: "완료!",
        footer: "&copy; 2025 Powered by Ollama."
    }
};