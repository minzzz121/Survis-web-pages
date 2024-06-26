﻿const generatedBibEntries = {
    "DirgovaLuptakovaIveta2022WSHA": {
        "abstract": "Computing devices that can recognize various human activities or movements can be used to assist people in healthcare, sports, or human-robot interaction. Readily available data for this purpose can be obtained from the accelerometer and the gyroscope built into everyday smartphones. Effective classification of real-time activity data is, therefore, actively pursued using various machine learning methods. In this study, the transformer model, a deep learning neural network model developed primarily for the natural language processing and vision tasks, was adapted for a time-series analysis of motion signals. The self-attention mechanism inherent in the transformer, which expresses individual dependencies between signal values within a time series, can match the performance of state-of-the-art convolutional neural networks with long short-term memory. The performance of the proposed adapted transformer method was tested on the largest available public dataset of smartphone motion sensor data covering a wide range of activities, and obtained an average identification accuracy of 99.2% as compared with 89.67% achieved on the same data by a conventional machine learning method. The results suggest the expected future relevance of the transformer model for human activity recognition.",
        "address": "BASEL",
        "author": "Dirgova Luptakova, Iveta and Kubovcik, Martin and Pospichal, Jiri",
        "copyright": "Copyright 2024 Elsevier B.V., All rights reserved.",
        "issn": "1424-8220",
        "journal": "Sensors (Basel, Switzerland)",
        "keywords": "Accelerometers ; Activity recognition ; Algorithms ; Artificial neural networks ; Chemistry ; Chemistry Analytical ; Computational linguistics ; Deep learning ; Engineering ; Engineering Electrical & Electronic ; Human Activities ; Human activity recognition ; Human motion ; Humans ; Instruments & Instrumentation ; Language processing ; Machine Learning ; Motion sensors ; Moving object recognition ; Natural language interfaces ; Natural language processing ; Neural networks ; Neural Networks Computer ; Physical Sciences ; Science & Technology ; Sensors ; Sequence-to-sequence prediction ; Signal processing ; Smart phones ; Smartphones ; Technology ; Time series ; transformer ; Transformers ; Wearable Electronic Devices",
        "language": "eng",
        "number": "5",
        "pages": "1911",
        "publisher": "Mdpi",
        "title": "Wearable Sensor-Based Human Activity Recognition with Transformer Model",
        "type": "article",
        "volume": "22",
        "year": "2022"
    },
    "KayaYasin2024Harf": {
        "abstract": "Smart devices with sensors now enable continuous measurement of activities of daily living. Accordingly, various human activity recognition (HAR) experiments have been carried out, aiming to convert the measures taken from smart devices into physical activity types. HAR can be applied in many research areas, such as health assessment, environmentally supported living systems, sports, exercise, and security systems. The HAR process can also detect activity-based anomalies in daily life for elderly people. Thus, this study focused on sensor-based activity recognition, and we developed a new 1D-CNN-based deep learning approach to detect human activities. We evaluated our model using raw accelerometer and gyroscope sensor data on three public datasets: UCI-HAPT, WISDM, and PAMAP2. Parameter optimization was employed to define the model\u2019s architecture and fine-tune the final design\u2019s hyper-parameters. We applied 6, 7, and 12 classes of activity recognition to the UCI-HAPT dataset and obtained accuracy rates of 98%, 96.9%, and 94.8%, respectively. We also achieved an accuracy rate of 97.8% and 90.27% on the WISDM and PAMAP2 datasets, respectively. Moreover, we investigated the impact of using each sensor data individually, and the results show that our model achieved better results using both sensor data concurrently.",
        "address": "New York",
        "author": "Kaya, Yasin and Topuz, Elif Kevser",
        "copyright": "The Author(s), under exclusive licence to Springer Science+Business Media, LLC, part of Springer Nature 2023. Springer Nature or its licensor (e.g. a society or other partner) holds exclusive rights to this article under a publishing agreement with the author(s) or other rightsholder(s); author self-archiving of the accepted manuscript version of this article is solely governed by the terms of such publishing agreement and applicable law.",
        "issn": "1380-7501",
        "journal": "Multimedia tools and applications",
        "keywords": "1D-CNN ; Computer Communication Networks ; Computer Science ; Data Structures and Information Theory ; Deep learning ; Human activity recognition ; Multimedia Information Systems ; Signal processing ; Special Purpose and Application-Based Systems",
        "language": "eng",
        "number": "4",
        "pages": "10815--10838",
        "publisher": "Springer US",
        "title": "Human activity recognition from multiple sensors data using deep CNNs",
        "type": "article",
        "volume": "83",
        "year": "2024"
    },
    "KhanDanyal2024AWIS": {
        "abstract": "Advancements in sensing technology have expanded the capabilities of both wearable devices and smartphones, which are now commonly equipped with inertial sensors such as accelerometers and gyroscopes. Initially, these sensors were used for device feature advancement, but now, they can be used for a variety of applications. Human activity recognition (HAR) is an interesting research area that can be used for many applications like health monitoring, sports, fitness, medical purposes, etc. In this research, we designed an advanced system that recognizes different human locomotion and localization activities. The data were collected from raw sensors that contain noise. In the first step, we detail our noise removal process, which employs a Chebyshev type 1 filter to clean the raw sensor data, and then the signal is segmented by utilizing Hamming windows. After that, features were extracted for different sensors. To select the best feature for the system, the recursive feature elimination method was used. We then used SMOTE data augmentation techniques to solve the imbalanced nature of the Extrasensory dataset. Finally, the augmented and balanced data were sent to a long short-term memory (LSTM) deep learning classifier for classification. The datasets used in this research were Real-World Har, Real-Life Har, and Extrasensory. The presented system achieved 89% for Real-Life Har, 85% for Real-World Har, and 95% for the Extrasensory dataset. The proposed system outperforms the available state-of-the-art methods.",
        "address": "Switzerland",
        "author": "Khan, Danyal and Al Mudawi, Naif and Abdelhaq, Maha and Alazeb, Abdulwahab and Alotaibi, Saud S. and Algarni, Asaad and Jalal, Ahmad",
        "copyright": "Copyright 2024 Elsevier B.V., All rights reserved.",
        "issn": "1424-8220",
        "journal": "Sensors (Basel, Switzerland)",
        "keywords": "Exercise ; Human Activities ; human activity recognition ; Humans ; Locomotion ; long short-term memory (LSTM) ; Physical fitness ; Recognition Psychology ; Sensors ; Smart phones ; smartphone sensors ; synthetic minority oversampling technique (SMOTE) ; Wearable Electronic Devices",
        "language": "eng",
        "number": "3",
        "pages": "735",
        "publisher": "MDPI AG",
        "title": "A Wearable Inertial Sensor Approach for Locomotion and Localization Recognition on Physical Activity",
        "type": "article",
        "volume": "24",
        "year": "2024"
    },
    "LalapuraVarshaS.2024ASEo": {
        "abstract": "The Recurrent Neural Networks (RNNs) are an essential class of supervised learning algorithms. Complex tasks like speech recognition, machine translation, sentiment classification, weather prediction, etc., are now performed by well-trained RNNs. Local or cloud-based GPU machines are used to train them. However, inference is now shifting to miniature, mobile, IoT devices and even micro-controllers. Due to their colossal memory and computing requirements, mapping RNNs directly onto resource-constrained platforms is arcane and challenging. The efficacy of edge-intelligent RNNs (EI-RNNs) must satisfy both performance and memory-fitting requirements at the same time without compromising one for the other. This study's aim was to provide an empirical evaluation and optimization of historic as well as recent RNN architectures for high-performance and low-memory footprint goals. We focused on Human Activity Recognition (HAR) tasks based on wearable sensor data for embedded healthcare applications. We evaluated and optimized six different recurrent units, namely Vanilla RNNs, Long Short-Term Memory (LSTM) units, Gated Recurrent Units (GRUs), Fast Gated Recurrent Neural Networks (FGRNNs), Fast Recurrent Neural Networks (FRNNs), and Unitary Gated Recurrent Neural Networks (UGRNNs) on eight publicly available time-series HAR datasets. We used the hold-out and cross-validation protocols for training the RNNs. We used low-rank parameterization, iterative hard thresholding, and spare retraining compression for RNNs. We found that efficient training (i.e., dataset handling and preprocessing procedures, hyperparameter tuning, and so on, and suitable compression methods (like low-rank parameterization and iterative pruning) are critical in optimizing RNNs for performance and memory efficiency. We implemented the inference of the optimized models on Raspberry Pi.",
        "address": "BASEL",
        "author": "Lalapura, Varsha S. and Bhimavarapu, Veerender Reddy and Amudha, J. and Satheesh, Hariram Selvamurugan",
        "copyright": "Copyright 2024 Elsevier B.V., All rights reserved.",
        "issn": "1999-4893",
        "journal": "Algorithms",
        "keywords": "compression ; Computational linguistics ; Computer Science ; Computer Science Artificial Intelligence ; Computer Science Theory & Methods ; Data mining ; hyperparameter tuning ; Language processing ; low rank ; Machine learning ; Natural language interfaces ; Neural networks ; Rankings ; Recurrent Neural Networks ; Science & Technology ; Sensors ; sparsity ; Technology ; Weather forecasting ; weights and biases (wandb)",
        "language": "eng",
        "number": "3",
        "pages": "104",
        "publisher": "Mdpi",
        "title": "A Systematic Evaluation of Recurrent Neural Network Models for Edge Intelligence and Human Activity Recognition Applications",
        "type": "article",
        "volume": "17",
        "year": "2024"
    },
    "MekruksavanichSakorn2024DPHA": {
        "abstract": "Human activity recognition (HAR) identifies people\u2019s motions and actions in daily life. HAR research has grown with the popularity of internet-connected, wearable sensors that capture human movement data to detect activities. Recent deep learning advances have enabled more HAR research and applications using data from wearable devices. However, prior HAR research often focused on a few sensor locations on the body. Recognizing real-world activities poses challenges when device positioning is uncontrolled or initial user training data are unavailable. This research analyzes the feasibility of deep learning models for both position-dependent and position-independent HAR. We introduce an advanced residual deep learning model called Att-ResBiGRU, which excels at accurate position-dependent HAR and delivers excellent performance for position-independent HAR. We evaluate this model using three public HAR datasets: Opportunity, PAMAP2, and REALWORLD16. Comparisons are made to previously published deep learning architectures for addressing HAR challenges. The proposed Att-ResBiGRU model outperforms existing techniques in accuracy, cross-entropy loss, and F1-score across all three datasets. We assess the model using k-fold cross-validation. The Att-ResBiGRU achieves F1-scores of 86.69%, 96.23%, and 96.44% on the PAMAP2, REALWORLD16, and Opportunity datasets, surpassing state-of-the-art models across all datasets. Our experiments and analysis demonstrate the exceptional performance of the Att-ResBiGRU model for HAR applications.",
        "author": "Mekruksavanich, Sakorn and Jitpattanakul, Anuchit",
        "copyright": "COPYRIGHT 2024 MDPI AG",
        "issn": "2076-3417",
        "journal": "Applied sciences",
        "keywords": "deep learning ; human activity recognition ; Neural networks ; position-independent sensing ; residual neural network ; Sensors ; wearable sensors",
        "language": "eng",
        "number": "5",
        "pages": "2107",
        "publisher": "MDPI AG",
        "title": "Device Position-Independent Human Activity Recognition with Wearable Sensors Using Deep Neural Networks",
        "type": "article",
        "volume": "14",
        "year": "2024"
    },
    "SarkarApu2023Harf": {
        "abstract": "Capturing time and frequency relationships of time series signals offers an inherent barrier for automatic human activity recognition (HAR) from wearable sensor data. Extracting spatiotemporal context from the feature space of the sensor reading sequence is challenging for the current recurrent, convolutional, or hybrid activity recognition models. The overall classification accuracy also gets affected by large size feature maps that these models generate. To this end, in this work, we have put forth a hybrid architecture for wearable sensor data-based HAR. We initially use Continuous Wavelet Transform to encode the time series of sensor data as multi-channel images. Then, we utilize a Spatial Attention-aided Convolutional Neural Network (CNN) to extract higher-dimensional features. To find the most essential features for recognizing human activities, we develop a novel feature selection (FS) method. In order to identify the fitness of the features for the FS, we first employ three filter-based methods: Mutual Information (MI), Relief-F, and minimum redundancy maximum relevance (mRMR). The best set of features is then chosen by removing the lower-ranked features using a modified version of the Genetic Algorithm (GA). The K-Nearest Neighbors (KNN) classifier is then used to categorize human activities. We conduct comprehensive experiments on five well-known, publicly accessible HAR datasets, namely UCI-HAR, WISDM, MHEALTH, PAMAP2, and HHAR. Our model significantly outperforms the state-of-the-art models in terms of classification performance. We also observe an improvement in overall recognition accuracy with the use of GA-based FS technique with a lower number of features. The source code of the paper is publicly available here https://github.com/apusarkar2195/HAR_WaveletTransform_SpatialAttention_FeatureSelection .",
        "address": "London",
        "author": "Sarkar, Apu and Hossain, S. K. Sabbir and Sarkar, Ram",
        "copyright": "The Author(s), under exclusive licence to Springer-Verlag London Ltd., part of Springer Nature 2022. Springer Nature or its licensor (e.g. a society or other partner) holds exclusive rights to this article under a publishing agreement with the author(s) or other rightsholder(s); author self-archiving of the accepted manuscript version of this article is solely governed by the terms of such publishing agreement and applicable law.",
        "issn": "0941-0643",
        "journal": "Neural computing & applications",
        "keywords": "Artificial Intelligence ; Computational Biology/Bioinformatics ; Computational Science and Engineering ; Computer Science ; Computer Science Artificial Intelligence ; Continuous wavelet transform ; Data Mining and Knowledge Discovery ; Deep learning ; Feature selection ; Filter method ; Genetic Algorithm ; Human activity recognition ; Image Processing and Computer Vision ; Original ; Original Article ; Probability and Statistics in Computer Science ; Science & Technology ; Spatial attention ; Technology",
        "language": "eng",
        "number": "7",
        "pages": "5165--5191",
        "publisher": "Springer London",
        "title": "Human activity recognition from sensor data using spatial attention-aided CNN with genetic algorithm",
        "type": "article",
        "volume": "35",
        "year": "2023"
    },
    "SuhSungho2023TTAl": {
        "abstract": "Wearable sensor-based human activity recognition (HAR) has emerged as a principal research area and is utilized in a variety of applications. Recently, deep learning-based methods have achieved significant improvement in the HAR field with the development of human\u2013computer interaction applications. However, most of them are limited to operating in a local neighborhood in the process of a standard convolution neural network, and correlations between different sensors on body positions are ignored. In addition, even though several recent existing works considered the correlations between different sensor positions, they still face significant challenging problems with performance degradation due to large gaps in the distribution of training and test data, and behavioral differences between subjects. In this work, we propose a novel Transformer-based Adversarial learning framework for human activity recognition using wearable sensors via Self-KnowledgE Distillation (TASKED), that accounts for individual sensor orientations and spatial and temporal features. The proposed method is capable of learning cross-domain embedding feature representations from multiple subjects datasets using adversarial learning and the maximum mean discrepancy (MMD) regularization to align the data distribution over multiple domains. In the proposed method, we adopt the teacher-free self-knowledge distillation to improve the stability of the training procedure and the performance of human activity recognition. Experimental results show that TASKED not only outperforms state-of-the-art methods on the four real-world public HAR datasets (alone or combined) but also improves the subject generalization effectively. \u2022We proposed a novel adversarial learning framework for cross-subject human activity recognition with a spatial\u2013temporal transformer.\u2022Adversarial learning is formulated to improve feature generalization and activity recognition.\u2022The self-knowledge distillation method is adopted to improve the stability of the training procedure.\u2022The proposed method outperforms state-of-the-art methods on four public activity recognition datasets.",
        "address": "AMSTERDAM",
        "author": "Suh, Sungho and Rey, Vitor Fortes and Lukowicz, Paul",
        "copyright": "2022",
        "issn": "0950-7051",
        "journal": "Knowledge-based systems",
        "keywords": "Adversarial learning ; Computer Science ; Computer Science Artificial Intelligence ; Domain generalization ; Human activity recognition ; Science & Technology ; Self-knowledge distillation ; Technology ; Transformer ; Wearable sensors",
        "language": "eng",
        "pages": "110143",
        "publisher": "Elsevier B.V",
        "title": "TASKED: Transformer-based Adversarial learning for human activity recognition using wearable sensors via Self-KnowledgE Distillation",
        "type": "article",
        "volume": "260",
        "year": "2023"
    },
    "VuongThiHong2023DWCN": {
        "abstract": "Recent advances in wearable systems have made inertial sensors, such as accelerometers and gyroscopes, compact, lightweight, multimodal, low-cost, and highly accurate. Wearable inertial sensor-based multimodal human activity recognition (HAR) methods utilize the rich sensing data from embedded multimodal sensors to infer human activities. However, existing HAR approaches either rely on domain knowledge or fail to address the time-frequency dependencies of multimodal sensor signals. In this paper, we propose a novel method called deep wavelet convolutional neural networks (DWCNN) designed to learn features from the time-frequency domain and improve accuracy for multimodal HAR. DWCNN introduces a framework that combines continuous wavelet transforms (CWT) with enhanced deep convolutional neural networks (DCNN) to capture the dependencies of sensing signals in the time-frequency domain, thereby enhancing the feature representation ability for multiple wearable inertial sensor-based HAR tasks. Within the CWT, we further propose an algorithm to estimate the wavelet scale parameter. This helps enhance the performance of CWT when computing the time-frequency representation of the input signals. The output of the CWT then serves as input for the proposed DCNN, which consists of residual blocks for extracting features from different modalities and attention blocks for fusing these features of multimodal signals. We conducted extensive experiments on five benchmark HAR datasets: WISDM, UCI-HAR, Heterogeneous, PAMAP2, and UniMiB SHAR. The experimental results demonstrate the superior performance of the proposed model over existing competitors.",
        "address": "BASEL",
        "author": "Vuong, Thi Hong and Doan, Tung and Takasu, Atsuhiro",
        "copyright": "Copyright 2023 Elsevier B.V., All rights reserved.",
        "issn": "1424-8220",
        "journal": "Sensors (Basel, Switzerland)",
        "keywords": "Algorithms ; Chemistry ; Chemistry Analytical ; continuous wavelet transform ; convolutional neural networks ; Engineering ; Engineering Electrical & Electronic ; Human Activities ; Humans ; Instruments & Instrumentation ; multimodal human activity recognition ; Neural networks ; Neural Networks Computer ; Physical Sciences ; Science & Technology ; Sensors ; Technology ; Wavelet Analysis ; Wearable Electronic Devices ; wearable inertial sensors",
        "language": "eng",
        "number": "24",
        "pages": "9721",
        "publisher": "Mdpi",
        "title": "Deep Wavelet Convolutional Neural Networks for Multimodal Human Activity Recognition Using Wearable Inertial Sensors",
        "type": "article",
        "volume": "23",
        "year": "2023"
    },
    "ZengFancheng2024WSRM": {
        "abstract": "Human activity recognition (HAR) based on wearable sensors has emerged as a low-cost key-enabling technology for applications such as human-computer interaction and healthcare. In wearable sensor-based HAR, deep learning is desired for extracting human active features. Due to the spatiotemporal dynamic of human activity, a special deep learning network for recognizing the temporal continuous activities of humans is required to improve the recognition accuracy for supporting advanced HAR applications. To this end, a residual multifeature fusion shrinkage network (RMFSN) is proposed. The RMFSN is an improved residual network which consists of a multi-branch framework, a channel attention shrinkage block (CASB), and a classifier network. The special multi-branch framework utilizes a 1D-CNN, a lightweight temporal attention mechanism, and a multi-scale feature extraction method to capture diverse activity features via multiple branches. The CASB is proposed to automatically select key features from the diverse features for each activity, and the classifier network outputs the final recognition results. Experimental results have shown that the accuracy of the proposed RMFSN for the public datasets UCI-HAR, WISDM, and OPPORTUNITY are 98.13%, 98.35%, and 93.89%, respectively. In comparison with existing advanced methods, the proposed RMFSN could achieve higher accuracy while requiring fewer model parameters.",
        "address": "Switzerland",
        "author": "Zeng, Fancheng and Guo, Mian and Tan, Long and Guo, Fa and Liu, Xiushan",
        "copyright": "Copyright 2024 Elsevier B.V., All rights reserved.",
        "issn": "1424-8220",
        "journal": "Sensors (Basel, Switzerland)",
        "keywords": "attention mechanism ; feature fusion ; feature selection ; Human Activities ; human activity recognition (HAR) ; Humans ; multifeature extraction ; Recognition Psychology ; Sensors ; Technology ; Technology application ; Wearable Electronic Devices",
        "language": "eng",
        "number": "3",
        "pages": "758",
        "publisher": "MDPI AG",
        "title": "Wearable Sensor-Based Residual Multifeature Fusion Shrinkage Networks for Human Activity Recognition",
        "type": "article",
        "volume": "24",
        "year": "2024"
    },
    "ZhangHaoran2024MMNf": {
        "abstract": "Human activity recognition (HAR) has gained significant interest in recent years, specifically in the context of wearable sensors. This approach utilizes the abundant sensory information provided by multimode embedded sensors like accelerometers and gyroscopes to deduce and identify human activities. How to extract rich representation features from these data to capture subtle differences between different activities is the key challenge of this technology. Although the HAR technology based on deep learning has achieved satisfactory results, most methods still have problems such as insufficient feature extraction and insufficient attention to key features. Therefore, this article designs a multilevel network called Multi-STMT, which is based on the spatiotemporal attention mechanism and multiscale temporal embedding. The network integrates a convolutional neural network (CNN) module and a bidirectional gated recurrent unit (BiGRU) module and introduces an attention mechanism in each module to fully capture the temporal and spatial dependence of multimodal signals. Comparing previous methods, we have achieved state-of-the-art recognition accuracy on four publicly available datasets. Specifically, on the DSADS, SisFall, HCI-HAR, and KU-HAR, the proposed method's recognition accuracy has reached 99.48%, 91.85%, 96.67%, and 97.99%, respectively, hence indicating the advantage of the proposed method.",
        "author": "Zhang, Haoran and Xu, Linhai",
        "copyright": "Copyright 2024 Elsevier B.V., All rights reserved.",
        "issn": "0018-9456",
        "journal": "IEEE transactions on instrumentation and measurement",
        "keywords": "Convolution ; Convolutional neural networks ; Deep learning ; Feature extraction ; Human activity recognition ; Human activity recognition (HAR) ; multiscale time embedding ; spatiotemporal attention ; Time series analysis ; wearable sensor ; Wearable sensors",
        "language": "eng",
        "pages": "1--12",
        "publisher": "IEEE",
        "title": "Multi-STMT: Multi-Level Network for Human Activity Recognition Based on Wearable Sensors",
        "type": "article",
        "volume": "73",
        "year": "2024"
    }
};